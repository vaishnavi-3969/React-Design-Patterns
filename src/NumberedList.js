export const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {
    return (
        <>
            {
                items.map((item, i) => (
                    <>
                        <div className="flex">
                            <h3 className="text-3x1">{i + 1}</h3>
                            <ItemComponent key={i} {...{ [resourceName]: item }} />
                        </div>
                    </>
                ))
            }
        </>
    )
}