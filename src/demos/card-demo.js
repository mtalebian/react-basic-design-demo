import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const CardDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1>Card</h1>

            <Example title="Basic card" content="center" vertical={false} shaded>
                <bd.Card>
                    <bd.CardHeader>CardHeader</bd.CardHeader>
                    <bd.CardBody>this is CardBody</bd.CardBody>
                </bd.Card>

                <bd.Card>
                    <bd.CardHeader>CardHeader</bd.CardHeader>
                    <bd.CardBody>this is CardBody</bd.CardBody>
                    <bd.CardFooter>CardFooter</bd.CardFooter>
                </bd.Card>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Card>",
                    "	<bd.CardHeader>CardHeader</bd.CardHeader>",
                    "	<bd.CardBody>this is CardBody</bd.CardBody>",
                    "</bd.Card>",
                    "",
                    "<bd.Card>",
                    "	<bd.CardHeader>CardHeader</bd.CardHeader>",
                    "	<bd.CardBody>this is CardBody</bd.CardBody>",
                    "	<bd.CardFooter>CardFooter</bd.CardFooter>",
                    "</bd.Card>",
                ]}
            />

            <Example title="Outlined" content="center" vertical={false} shaded>
                <bd.Card outline>
                    <bd.CardHeader>CardHeader</bd.CardHeader>
                    <bd.CardBody>this is CardBody</bd.CardBody>
                </bd.Card>
            </Example>
            <SourceCode lines={["<bd.Card outline> ... </bd.Card>"]} />
        </div>
    );
};
