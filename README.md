# Command Palette 

A simple, composable and dependency-free implementation of a command palette.

<img width="400" alt="image" src="https://github.com/user-attachments/assets/44e5d8c3-bf85-491d-8cef-93829770ac7f" />


## How to use
The component is composable. Use only what you need.

```jsx
const Menu = () => (
    <CommandPalette.Container variant="sm">
        <CommandPalette.Root defaultSlice="F1">
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
)
```

The component works with suspense. Fetch the data you need in an item group to display the loading state.


```jsx
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
```
