import type { Meta } from "@storybook/react-vite"
import CommandPalette from "../CommandPalette"
import { QueryClient, QueryClientProvider, useSuspenseQuery } from "@tanstack/react-query"

const queryClient = new QueryClient()

const fetchGroup = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
                "Item 7",
                "Item 8",
            ])
        }, 40000)
    })
}

const Group = () => {
    const { data }: { data: string[] } = useSuspenseQuery({
        queryKey: ["items"],
        queryFn: async () => await fetchGroup(),
    })

    return data.map((item) => (
        <CommandPalette.Item key={item} searchTerm={item}>
            {item}
        </CommandPalette.Item>
    ))
}

const Palette = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <CommandPalette.Container variant={"md"}>
                <CommandPalette.Root defaultSlice="group">
                    <CommandPalette.Header>
                        <CommandPalette.Search />
                        <CommandPalette.TabsContainer>
                            <CommandPalette.Tab tabName="group">Group</CommandPalette.Tab>
                        </CommandPalette.TabsContainer>
                    </CommandPalette.Header>
                    <CommandPalette.ItemGroup slice="group">
                        <Group />
                    </CommandPalette.ItemGroup>
                </CommandPalette.Root>
            </CommandPalette.Container>
        </div>
    )
}

const meta: Meta = {
    title: "Example/Command Palette/Suspense",
    component: Palette,
} satisfies Meta<typeof Palette>

export const Default = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Palette />
        </QueryClientProvider>
    )
}

export default meta
