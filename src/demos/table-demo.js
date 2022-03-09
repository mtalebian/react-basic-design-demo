import React, { useState } from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode, Props } from "./demo-components";

export const TableDemo = () => {
    const [selectedIndices, setSelectedIndices] = useState([]);

    return (
        <>
            <div style={{ maxWidth: 800 }}>
                <h1>Tables</h1>
                <p className="mb-5">Responsive tables. Use this component just to rendere small set of rows & columns</p>

                <Example title="Basic table">
                    <bd.BasicTable>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 70 }}>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th style={{ width: 70 }}>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jon</td>
                                    <td>Snow</td>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cersei</td>
                                    <td>Lannister</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Arya</td>
                                    <td>Shark</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Daenerys</td>
                                    <td>Targaryen</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </bd.BasicTable>
                </Example>
                <SourceCode lines={["<bd.BasicTable>", "   <table>", "   ...", "   </table>", "</bd.BasicTable>"]} />

                <Example title="Data table">
                    <bd.BasicTable
                        hover
                        nowrap
                        multiSelect
                        toggleOnClick
                        columns={[
                            { name: "Id", title: "ID", width: 70 },
                            { name: "firstName", title: "First Name" },
                            { name: "lastName", title: "Last Name" },
                            { name: "age", title: "Age", width: 70 },
                        ]}
                        data={[
                            { Id: 1, firstName: "Jon", lastName: "Snow", age: 35 },
                            { Id: 2, firstName: "Cersei", lastName: "Lannister", age: 42 },
                            { Id: 3, firstName: "Arya", lastName: "Shark", age: 16 },
                            { Id: 4, firstName: "Daenerys", lastName: "Targaryen", age: null },
                        ]}
                        selectedIndices={selectedIndices}
                        onSelectionChanged={(indices) => setSelectedIndices(indices)}
                        actions={
                            <bd.Button size="sm" variant="contained">
                                CREATE
                            </bd.Button>
                        }
                    >
                        <div className="nothing-found">Nothing Found!</div>
                    </bd.BasicTable>
                </Example>
                <SourceCode
                    lines={[
                        "const [selectedIndices, setSelectedIndices] = useState([]);",
                        "",
                        "<bd.BasicTable",
                        "   hover  nowrap  multiSelect toggleOnClick",
                        "   columns={[",
                        "      { name: 'Id', title: 'ID', width: 70 },",
                        "      { name: 'firstName', title: 'First Name' },",
                        "      ...",
                        "   }}",
                        "   data={[",
                        "      { Id: 1, firstName: 'Jon', lastName: 'Snow', age: 35 },",
                        "      { Id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },",
                        "      ...",
                        "   ]}",
                        "   ",
                        "   selectedIndices = {selectedIndices}",
                        "   onSelectionChanged = {(indices) => setSelectedIndices(indices)}",
                        "   actions={",
                        "      <>",
                        "         <bd.Button size='sm' variant='contained'>CREATE</bd.Button>",
                        "         <bd.Button size='sm' variant='outline' className='bg-default'>DELETE</bd.Button>",
                        "      </>",
                        "   }",
                        ">",
                        "    <div className='nothing-found'>Nothing Found!</div>",
                        "</bd.BasicTable>",
                    ]}
                />

                <Example title="Fixed table">
                    <bd.BasicTable hover fixed>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 70 }}>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name Last Name Last Name</th>
                                    <th style={{ width: 70 }}>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jon</td>
                                    <td>Snow</td>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cersei</td>
                                    <td>Lannister</td>
                                    <td>42</td>
                                </tr>
                                <tr className="selected">
                                    <td>3</td>
                                    <td>Arya</td>
                                    <td>Shark</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Daenerys</td>
                                    <td>Targaryen</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </bd.BasicTable>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.BasicTable hover fixed>",
                        "   <table>",
                        "      <thead>",
                        "         ...",
                        "      </thead>",
                        "      <tbody>",
                        "         ...",
                        "         <tr className='selected'>...</tr>",
                        "         ...",
                        "      </tbody>",
                        "   </table>",
                        "</bd.BasicTable>",
                    ]}
                />

                <Example title="Compact">
                    <bd.BasicTable compact>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 70 }}>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th style={{ width: 70 }}>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jon</td>
                                    <td>Snow</td>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cersei</td>
                                    <td>Lannister</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Arya</td>
                                    <td>Shark</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Daenerys</td>
                                    <td>Targaryen</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </bd.BasicTable>
                </Example>
                <SourceCode lines={["<bd.BasicTable compact>", "   <table>", "   ...", "   </table>", "</bd.BasicTable>"]} />

                <Example title="Checkbox">
                    <bd.BasicTable>
                        <table>
                            <thead>
                                <tr>
                                    <th className="selection-column">
                                        <bd.Toggle size="sm" disableRipple />
                                    </th>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="selection-column">
                                        <bd.Toggle size="sm" disableRipple />
                                    </td>
                                    <td>1</td>
                                    <td>Jon</td>
                                    <td>Snow</td>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td className="selection-column">
                                        <bd.Toggle size="sm" disableRipple />
                                    </td>
                                    <td>2</td>
                                    <td>Cersei</td>
                                    <td>Lannister</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td className="selection-column">
                                        <bd.Toggle size="sm" disableRipple />
                                    </td>
                                    <td>3</td>
                                    <td>Arya</td>
                                    <td>Shark</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td className="selection-column">
                                        <bd.Toggle size="sm" disableRipple />
                                    </td>
                                    <td>4</td>
                                    <td>Daenerys</td>
                                    <td>Targaryen</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </bd.BasicTable>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.BasicTable>",
                        "   <table>",
                        "      <thead>",
                        "         <tr>",
                        "            <th className='selection-column'><bd.Toggle size='sm' disableRipple /></th>",
                        "            ...",
                        "         </tr>",
                        "         ...",
                        "      </thead>",
                        "      <tbody>",
                        "         ...",
                        "         <tr>",
                        "            <td className='selection-column'><bd.Toggle size='sm' disableRipple /></td>",
                        "            ...",
                        "         </tr>",
                        "         ...",
                        "      </tbody>",
                        "   </table>",
                        "</bd.BasicTable>",
                    ]}
                />

                <Example title="Scrollable">
                    <bd.BasicTable hover nowrap maxHeight={150}>
                        <table style={{ minWidth: 700 }}>
                            <thead>
                                <tr>
                                    <th style={{ width: 70 }}>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name Last Name Last Name</th>
                                    <th style={{ width: 70 }}>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jon</td>
                                    <td>Snow</td>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cersei</td>
                                    <td>Lannister</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Arya</td>
                                    <td>Shark</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Daenerys</td>
                                    <td>Targaryen</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>new</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </bd.BasicTable>
                </Example>
                <SourceCode
                    lines={["<bd.BasicTable hover nowrap maxHeight={150}>", "   <table>", "      ...", "   </table>", "</bd.BasicTable>"]}
                />

                <Example title="Nothing Found">
                    <bd.BasicTable>
                        <div className="nothing-found">Nothing Found!</div>
                    </bd.BasicTable>
                </Example>
                <SourceCode lines={["<bd.BasicTable>", "   <div className='nothing-found'>Nothing Found!</div>", "</bd.BasicTable>"]} />
            </div>

            <Props
                props="fullWidth?: boolean;    hover?: boolean;    striped?: boolean;    compact?: boolean;    nowrap?: boolean;    fixed?: boolean;    columns?: [];    data?: [];    selectedIndices?: [];    selectedRows?: [];    multiSelect?: boolean;    toggleOnClick?: boolean;    className?: string;    style?: object;    maxHeight: any;    maxWidth: any;    hideHeader?: boolean;    actions?: React.ReactNode;    children: React.ReactNode;    onSelectionChanged: (indices: any) => void;"
                defaults=""
            />
        </>
    );
};
