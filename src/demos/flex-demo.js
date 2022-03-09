import React, { useState } from "react";
import * as bd from "react-basic-design";
import { SourceCode, Props } from "./demo-components";

export const FlexDemo = () => {
    const [vertical, setVertical] = useState(false);
    const [justifyContent, setJustifyContent] = useState("start");
    const [alignItems, setAlignItems] = useState("start");

    return (
        <>
            <div style={{ maxWidth: 700 }}>
                <h1 className="mb-5">Flex</h1>
                <bd.Flex className="p-3">
                    <bd.FormRow label="Vertical">
                        <bd.Toggle type="select" model={vertical} setModel={setVertical} size="sm" />
                    </bd.FormRow>

                    <bd.FormRow label="Justify content">
                        <bd.TextField
                            type="select"
                            value={justifyContent}
                            onChange={(e) => setJustifyContent(e.target.value)}
                            items={["", "start", "around", "between", "center", "end"]}
                        />
                    </bd.FormRow>

                    <bd.FormRow label="Align items">
                        <bd.TextField
                            type="select"
                            value={alignItems}
                            onChange={(e) => setAlignItems(e.target.value)}
                            items={["", "start", "baseline", "stretch", "center", "end"]}
                        />
                    </bd.FormRow>
                </bd.Flex>
                <bd.Flex
                    className="bg-shade-10 p-3 mb-3"
                    gap={1}
                    content={justifyContent}
                    align={alignItems}
                    vertical={vertical}
                    style={{ height: 400 }}
                >
                    <div className="bg-default border px-1 py-4">A</div>
                    <div className="bg-default border px-5 py-1">B</div>
                    <div className="bg-default border px-3 py-5">C</div>
                </bd.Flex>
                <SourceCode
                    lines={[
                        `<bd.Flex  gap="1"  content='${justifyContent}'  align='${alignItems}'  ${vertical ? "vertical" : ""}>`,
                        "    <div className='border px-1 py-4'>A</div>",
                        "    <div className='border px-5 py-1'>B</div>",
                        "    <div className='border px-3 py-5'>C</div>",
                        "</bd.Flex>",
                    ]}
                />
            </div>

            <Props
                props="inline?: boolean;    reverse?: boolean;    vertical?: boolean;    content?: 'start' | 'end' | 'center' | 'between' | 'around';    align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';    gap?: any;    wrap?: false | true | 'no' | 'reverse';    className?: string;    children?: any;"
                defaults=""
            />
        </>
    );
};
