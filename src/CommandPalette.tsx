import React, {
    createContext,
    useContext,
    useMemo,
    useState,
    type ComponentProps,
    type ReactNode,
} from "react"
import classes from "./CommandPalette.module.css"
import type { ICommandPaletteContainerProps, ICommandPaletteItemProps } from "./types"

const noop = () => {}

const SearchTermContext = createContext<{
    searchTerm: string | null
    setSearchTerm: React.Dispatch<React.SetStateAction<string | null>>
}>({ searchTerm: null, setSearchTerm: noop })

const SliceContext = createContext<{
    slice: string
    setSlice: React.Dispatch<React.SetStateAction<string>>
}>({
    slice: "",
    setSlice: noop,
})

const Root = ({ children, defaultSlice }: { children?: ReactNode; defaultSlice: string }) => {
    const [searchTerm, setSearchTerm] = useState<string | null>(null)
    const [slice, setSlice] = useState<string>(defaultSlice)

    const searchTermProviderValue = useMemo(
        () => ({
            searchTerm,
            setSearchTerm,
        }),
        [searchTerm],
    )
    const sliceProviderValue = useMemo(() => ({ slice, setSlice }), [slice])

    return (
        <SearchTermContext.Provider value={searchTermProviderValue}>
            <SliceContext.Provider value={sliceProviderValue}>{children}</SliceContext.Provider>
        </SearchTermContext.Provider>
    )
}

const variantMap = {
    sm: classes["container-sm"],
    md: classes["container-md"],
    lg: classes["container-lg"],
} as const

const Container = ({ children, variant = "md", ...rest }: ICommandPaletteContainerProps) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.transparent_overlay}></div>
            <div
                className={`${classes.container} ${classes.p_sm} ${variantMap[variant]}`}
                {...rest}
            >
                {children}
            </div>
        </div>
    )
}

const TabsContainer = (props: ComponentProps<"ul">) => {
    return <ul className={`${classes.row} ${classes.sm_gap} ${props.className}`} {...props}></ul>
}

const Tab = ({ children, tabName, ...rest }: ComponentProps<"button"> & { tabName: string }) => {
    const { setSlice } = useContext(SliceContext)
    return (
        <li>
            <button
                type="button"
                {...rest}
                className={classes.tab_button}
                onClick={() => setSlice(tabName)}
            >
                {children}
            </button>
        </li>
    )
}

const Search = (props: ComponentProps<"input">) => {
    const { searchTerm, setSearchTerm } = useContext(SearchTermContext)
    return (
        <div className={`${classes.stack} ${classes.sm_gap}, ${classes.p_sm}`}>
            <input
                type="text"
                value={searchTerm || ""}
                onChange={(evt) => setSearchTerm(evt.target.value)}
                {...props}
            />
        </div>
    )
}

const ItemGroup = ({ children, slice }: { children: ReactNode; slice: string }) => {
    const { slice: contextSlice } = useContext(SliceContext)

    return contextSlice === slice ? (
        <ul className={`${classes.stack} ${classes.sm_gap}`}>{children}</ul>
    ) : null
}

const Item = ({ children, searchTerm, className, ...rest }: ICommandPaletteItemProps) => {
    const { searchTerm: contextSearchTerm } = useContext(SearchTermContext)
    return (contextSearchTerm && searchTerm?.includes(contextSearchTerm)) || !contextSearchTerm ? (
        <li className={`${classes.item} ${className}`} {...rest}>
            {children}
        </li>
    ) : null
}

export default { Container, Root, Search, ItemGroup, Item, TabsContainer, Tab }
