import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const BasicListAsTable = ({ data, columns, tableAttrs, searchBy, isSearchable,customTableHead, headerTitle, extraHeaders,headerClass , height,cellTextPosition='center', headerTextPosition ='center', containerClass = '', headerAttrs = {}, defaultSelectedTableIndex, headerRowAttrs = {}, rowAttrs = { className: '' }, cellAttrs = {}, headerCellAttrs, noDataText, disableRowSelection, color = "custom_primary", rowClassFunc = () => "", ...rest }) => {
    const [localData, setlocalData] = useState(data)
    const [selectedRow, setSelectedRow] = useState()



    const onSearch = filtered => {
        setlocalData(filtered)
    }
    const handleRowClick = (row) => {
        if (rowAttrs.onClick) {
            rowAttrs.onClick(row)
        }
    }

    useEffect(() => {
        setlocalData(data)
    }, [data])


    return (
        <Card className={`shadow-none m-auto border-${color} border-bottom bg-${color} bg-opacity-10 ${containerClass}`} {...rest}>
            <CardBody
                className={`p-0 py-0 px-0 scrollbar scrollbar-${color}`}
                style={{
                    maxHeight: height || "80vh",
                    overflowY: "auto",
                }}
            >
                
                <div className="d-flex flex-column">

                    <table {...tableAttrs}>
                        {customTableHead || <thead {...headerAttrs}
                            className={`w-100 bg-white ${headerAttrs.className}`}
                            style={{
                                position: "sticky",
                                top: 0,
                                // zIndex: 10,
                            }}>
                            <tr {...headerRowAttrs} className={`bg-${color || 'secondary'}  bg-opacity-75 text-white ${headerRowAttrs.className}`}>
                                {columns?.map(
                                    (column, i) => (
                                        <th {...headerCellAttrs} {...column?.headerCellAttrs} key={i} className={` ${(i == 0 || i == columns.length - 1) ? '' : 'border border-top-0'} text-${headerTextPosition} ${column.headerCellAttrs?.className} ${headerCellAttrs?.className}`}>
                                            {column.Header}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>}
                        <tbody>
                            {!!localData.length && localData.map(
                                (row, i) => (
                                    <tr key={i} {...{ ...rowAttrs, className: `${rowAttrs.className} ${rowClassFunc(row)} text-secondary ` + ((selectedRow == i || defaultSelectedTableIndex == i) ? ` text-${color} bg-${color || 'secondary'}  bg-opacity-10 ` : '') }} onClick={() => { !disableRowSelection && setSelectedRow(i); handleRowClick(row); }}>
                                        {columns.map((column, j) => (
                                            <td {...cellAttrs} {...column.currentCellAttrs} key={j} className={` border border-${color} text-${cellTextPosition}  ${cellAttrs.className} ${" "} ${column?.currentCellAttrs?.className}`}>

                                                {column.Cell ? column?.Cell(row) : row[column.accessor]}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    {(!data.length) && <h4 className='text-muted text-center mt-4'>{noDataText || "No Data Found"}</h4>}
                </div>
            </CardBody>
        </Card>
    )
}
export default BasicListAsTable
