import type { Meta, StoryObj } from "@storybook/react-vite"
import CommandPalette from "../CommandPalette"
import type { ICommandPaletteContainerProps } from "../types"

const Palette = (props: {
    defaultSlice: string
    variant: ICommandPaletteContainerProps["variant"]
}) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <CommandPalette.Container variant={props.variant}>
            <CommandPalette.Root defaultSlice={props.defaultSlice}>
                <CommandPalette.Header>
                    <CommandPalette.Search />
                    <CommandPalette.TabsContainer>
                        <CommandPalette.Tab tabName="F1">F1 cars of 2025</CommandPalette.Tab>
                        <CommandPalette.Tab tabName="WEC">WEC</CommandPalette.Tab>
                    </CommandPalette.TabsContainer>
                </CommandPalette.Header>
                <CommandPalette.ItemGroup slice="F1">
                    <CommandPalette.Item searchTerm="SF-25">SF-25</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="W16">W16</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="RB21">RB21</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="MCL39">MCL39</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="AMR25">AMR25</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="VF-25">VF-25</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="FW47">FW47</CommandPalette.Item>
                </CommandPalette.ItemGroup>
                <CommandPalette.ItemGroup slice="WEC">
                    <CommandPalette.Item searchTerm="499P">499P</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="GR010">GR010</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="GR020">GR020</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="963">Porsche 963</CommandPalette.Item>
                </CommandPalette.ItemGroup>
            </CommandPalette.Root>
        </CommandPalette.Container>
    </div>
)

const meta: Meta = {
    title: "Example/Command Palette",
    component: Palette,
} satisfies Meta<typeof Palette>

type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        defaultSlice: "F1",
        variant: "sm",
    },
}

export const Medium: Story = {
    args: {
        defaultSlice: "F1",
        variant: "md",
    },
}

export const Large: Story = {
    args: {
        defaultSlice: "F1",
        variant: "lg",
    },
}

export default meta
