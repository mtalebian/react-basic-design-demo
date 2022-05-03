/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import * as bd from "react-basic-design";

export const ShamsiDemo = () => {
    return (
        <div style={{ maxWidth: 1000 }}>
            <h1>Shamsi</h1>

            <Title>Time</Title>
            <Table>
                <Test
                    code="miladi.toHHMM('2021-05-26T13:57:31.2311892-04:00')"
                    result={bd.miladi.toHHMM("2021-05-26T13:57:31.2311892-04:00")}
                />
                <Test
                    code="miladi.toHHMMSS('2021-05-26T13:57:31.2311892-04:00')"
                    result={bd.miladi.toHHMMSS("2021-05-26T13:57:31.2311892-04:00")}
                />
                <Test code="miladi.toHHMM(new Date())" result={bd.miladi.toHHMM(new Date())} />
                <Test code="miladi.toHHMMSS(new Date())" result={bd.miladi.toHHMMSS(new Date())} />
                <Test code="miladi.toHHMM('2021/05/15 11:20')" result={bd.miladi.toHHMM("2021/05/15 11:20")} />
            </Table>

            <Title>Convertion</Title>
            <h3 className="my-4">
                Convert <span className="text-primary">Mildadi</span> to <span className="text-primary">Shamsi</span> date:
            </h3>
            <Table>
                <Test
                    code="miladi.toShamsi('2021-05-26T13:57:31.2311892-04:00')"
                    result={bd.miladi.toShamsi("2021-05-26T13:57:31.2311892-04:00")}
                />
                <Test code="miladi.toShamsi('2021/05/15 11:20')" result={bd.miladi.toShamsi("2021/05/15 11:20")} />
                <Test code="miladi.toShamsi('2021/05/15')" result={bd.miladi.toShamsi("2021/05/15")} />
                <Test code="miladi.toShamsi(new Date())" result={bd.miladi.toShamsi(new Date())} />
            </Table>

            <h3 className="my-4">
                Convert <span className="text-primary">Mildadi</span> to <span className="text-primary">Shamsi</span> date:
            </h3>

            <Table>
                <Test code="shamsi.toMiladi('1400/01/01')" result={bd.shamsi.toMiladi("1400/01/01")} />
            </Table>

            <Title>Parse </Title>
            <h3>Convert string to *Date* object:</h3>

            <Table>
                <Test code="miladi.parse('2021/05/15').toString()" result={bd.miladi.parse("2021/05/15").toString()} />
                <Test code="shamsi.parse('1400/01/01').toString()" result={bd.shamsi.parse("1400/01/01").toString()} />
            </Table>

            <Title>Validation</Title>
            <Table>
                <Test code="miladi.isValid('2021/01/16')" result={bd.miladi.isValid("2021/01/16").toString()} />
                <Test code="miladi.isValid('2021/1/16')" result={bd.miladi.isValid("2021/1/16").toString()} />
                <Test code="miladi.isValid('2021/1/32')" result={bd.miladi.isValid("2021/1/32").toString()} />
                <Test code="miladi.isValid('2021/11')" result={bd.miladi.isValid("2021/11").toString()} />
                <tr>
                    <td className="p-2"></td>
                </tr>
                <Test code="shamsi.isValid('1400/01/01')" result={bd.shamsi.isValid("1400/01/01").toString()} />
                <Test code="shamsi.isValid('1400/1/1')" result={bd.shamsi.isValid("1400/1/1").toString()} />
                <Test code="shamsi.isValid('1400/12/31')" result={bd.shamsi.isValid("1400/12/31").toString()} />
                <Test code="shamsi.isValid('1400//01')" result={bd.shamsi.isValid("1400//01").toString()} />
            </Table>

            <Title>Manipulation</Title>
            <Table>
                <Test code="shamsi.addDays('1400/1/1', 90)" result={bd.shamsi.addDays("1400/1/1", 90)} />
                <Test code="shamsi.addDays('1400/1/1', -1)" result={bd.shamsi.addDays("1400/1/1", -1)} />
                <Test code="shamsi.addMonths('1400/1/1', 3)" result={bd.shamsi.addMonths("1400/1/1", 3)} />
                <Test code="shamsi.addMonths('1400/1/1', -3)" result={bd.shamsi.addMonths("1400/1/1", -3)} />
                <Test code="shamsi.subtract('1401/1/1', '1400/1/1')" result={bd.shamsi.subtract("1401/1/1", "1400/1/1")} />
                <Test
                    code="shamsi.subtract(new Date(), '1400/1/1') + ' days is passed from 1400/1/1'"
                    result={bd.shamsi.subtract(new Date(), "1400/1/1") + " days is passed from 1400/1/1"}
                />
                <tr>
                    <td className="p-2"></td>
                </tr>
                <Test code="miladi.addDays('2021/1/1', 90)" result={bd.miladi.addDays("2021/1/1", 90)} />
                <Test code="miladi.addDays('2021/1/1', -1)" result={bd.miladi.addDays("2021/1/1", -1)} />
                <Test code="miladi.addMonths('2021/1/1', 3)" result={bd.miladi.addMonths("2021/1/1", 3)} />
                <Test code="miladi.addMonths('2021/1/1', -3)" result={bd.miladi.addMonths("2021/1/1", -3)} />
                <Test code="miladi.subtract('2022/1/1', '2021/1/1')" result={bd.miladi.subtract("2022/1/1", "2021/1/1")} />
                <Test
                    code="miladi.subtract(new Date(), '2021/1/1') + ' days is passed from 2021/1/1'"
                    result={bd.miladi.subtract(new Date(), "2021/1/1") + " days is passed from 2021/1/1"}
                />
            </Table>

            <Title>Display</Title>
            <Table>
                <Test
                    code="shamsi.format('yyyy/MM/dd HH:mm:ss.zzz', new Date())"
                    result={bd.shamsi.format("yyyy/MM/dd HH:mm:ss.zzz", new Date())}
                />
                <Test code="shamsi.format('yyyy/MM/dd', '1400/1/1')" result={bd.shamsi.format("yyyy/MM/dd", "1400/1/1")} />
                <Test code="shamsi.format('yy/M/d', '1400/1/1')" result={bd.shamsi.format("yy/M/d", "1400/1/1")} />
                <Test code="shamsi.format('yyyy, MMM, dd ddd', '1400/1/1')" result={bd.shamsi.format("yyyy, MMM, dd ddd", "1400/1/1")} />
                <tr>
                    <td className="p-2"></td>
                </tr>
                <Test code="miladi.format('yyyy/MM/dd', '2021/1/1')" result={bd.miladi.format("yyyy/MM/dd", "2021/1/1")} />
                <Test code="miladi.format('yy/M/d', '2021/1/1')" result={bd.miladi.format("yy/M/d", "2021/1/1")} />
                <Test code="miladi.format('yyyy, MMM, dd ddd', '2021/1/1')" result={bd.miladi.format("yyyy, MMM, dd ddd", "2021/1/1")} />
            </Table>
        </div>
    );
};

const Test = ({ code, result }) => {
    var i1 = code.indexOf(".");
    var i2 = code.indexOf("(");
    var c1 = code.substring(0, i1);
    var c2 = code.substring(i1, i2);
    var c3 = code.substring(i2);
    return (
        <tr>
            <td className="p-2 text-primary-text w-100">
                <code style={{ fontSize: 14 }}>
                    {c1}
                    <b className="text-secondary">{c2}</b>
                    {c3}
                </code>
            </td>
            <td className="p-2 text-success small text-nowrap">
                {" "}
                // Result: <b>{result}</b>
            </td>
        </tr>
    );
};

const Title = ({ children }) => {
    return <h2 className="my-4 bg-shade-3 p-2">{children}</h2>;
};

const Table = ({ children }) => {
    return (
        <table className="w-100 mb-5">
            <tbody>{children}</tbody>
        </table>
    );
};
