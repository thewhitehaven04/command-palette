import type { Meta, StoryObj } from "@storybook/react-vite"
import CommandPalette from "../CommandPalette"

const Palette = (props: { defaultSlice: string }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <CommandPalette.Container>
            <CommandPalette.Root defaultSlice={props.defaultSlice}>
                <CommandPalette.Search />
                <CommandPalette.TabsContainer>
                    <CommandPalette.Tab tabName="F1">F1</CommandPalette.Tab>
                    <CommandPalette.Tab tabName="WEC">WEC</CommandPalette.Tab>
                </CommandPalette.TabsContainer>
                <CommandPalette.ItemGroup slice="F1">
                    <CommandPalette.Item searchTerm="SF-25">SF-25</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="W16">W16</CommandPalette.Item>
                    <CommandPalette.Item searchTerm="RB21">RB21</CommandPalette.Item>
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
} satisfies Meta<typeof Palette>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => <Palette defaultSlice="F1" />,
}

export default meta
