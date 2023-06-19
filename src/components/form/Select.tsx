interface SelectProps<T> {
    label: string
    onChange: (v: T) => void
    selectItems: T[]
    defaultValue: T
}

export const Select = <T = string,>({ label, onChange, selectItems, defaultValue }: SelectProps<T>) => {
    return (
        <>
            <label className="mx-2 self-center">{label}</label>
            <select
                defaultValue={String(defaultValue)}
                onChange={(e) => onChange(e.target.value as T)}
                id="countries"
                className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            >
                {selectItems.map((item) => {
                    const selectItem = String(item)
                    return (
                        <option key={selectItem} value={selectItem}>
                            {selectItem}
                        </option>
                    )
                })}
            </select>
        </>
    )
}
