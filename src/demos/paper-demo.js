import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const PaperDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1>Paper</h1>

            <Example title="Basic paper" content="center" vertical={false} shaded>
                <bd.Paper shadow={0}>
                    <div style={{ width: 80, height: 80 }}></div>
                </bd.Paper>
                <bd.Paper>
                    <div style={{ width: 80, height: 80 }}></div>
                </bd.Paper>
                <bd.Paper shadow={3}>
                    <div style={{ width: 80, height: 80 }}></div>
                </bd.Paper>
            </Example>
            <SourceCode
                lines={["<bd.Paper shadow={0}>...</bd.Paper>", "<bd.Paper>...</bd.Paper>", "<bd.Paper shadow={3}>...</bd.Paper>"]}
            />

            <Example title="Outline and Square" content="center" vertical={false} shaded>
                <bd.Paper outline>
                    <div style={{ width: 80, height: 80 }}></div>
                </bd.Paper>
                <bd.Paper outline square>
                    <div style={{ width: 80, height: 80 }}></div>
                </bd.Paper>
            </Example>
            <SourceCode lines={["<bd.Paper outline>...</bd.Paper>", "<bd.Paper outline square>...</bd.Paper>"]} />
        </div>
    );
};
