import React from "react";
import SvgEmail from "../icons/Email";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const BadgeDemo = () => {
    return (
        <div style={{ maxWidth: 700 }}>
            <h1>Badge</h1>

            <Example title="Basic badge" content="center" vertical={false}>
                <bd.Badge value={4} color="primary">
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode lines={["<bd.Badge value={4} color='primary'> <SvgEmail /> </bd.Badge>"]} />

            <Example title="Color" content="center" vertical={false}>
                <bd.Badge value={4} color="secondary">
                    <SvgEmail />
                </bd.Badge>

                <bd.Badge value={4} className="bg-success text-white">
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Badge value={4} color='secondary'>...</bd.Badge>",
                    "<bd.Badge value={4} className='bg-success text-white'>...</bd.Badge>",
                ]}
            />

            <Example title="Showzero" content="center" vertical={false}>
                <bd.Badge value={0} color="primary" showzero>
                    <SvgEmail />
                </bd.Badge>

                <bd.Badge value={0} color="primary">
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Badge value={0} color='primary' showzero>...</bd.Badge>",
                    "<bd.Badge value={0} color='primary'>...</bd.Badge>",
                ]}
            />

            <Example title="Maximum value" content="center" vertical={false}>
                <bd.Badge value={100} color="primary" max={99}>
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode lines={["<bd.Badge value={100} color='primary' max={99}>...</bd.Badge>"]} />

            <Example title="Dot badge" content="center" vertical={false}>
                <bd.Badge color="primary" dot>
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode lines={["<bd.Badge color='primary' dot>...</bd.Badge>"]} />

            <Example title="Anim" content="center" vertical={false}>
                <bd.Badge color="primary" dot anim>
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode lines={["<bd.Badge color='primary' dot anim>...</bd.Badge>"]} />

            <Example title="Badge overlap" content="center" vertical={false}>
                <bd.Badge color="primary" dot>
                    <div className="bg-info" style={{ width: 50, height: 50 }}></div>
                </bd.Badge>

                <bd.Badge color="primary" dot overlapCircle>
                    <div className="bg-info rounded-circle" style={{ width: 50, height: 50 }}></div>
                </bd.Badge>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Badge color='primary' dot>",
                    "	<div className='bg-info' style={{ width: 50, height: 50 }}></div>",
                    "</bd.Badge>",
                    "",
                    "<bd.Badge color='primary' dot overlapCircle>",
                    "	<div className='bg-info rounded-circle' style={{ width: 50, height: 50 }}></div>",
                    "</bd.Badge>",
                ]}
            />

            <Example title="Badge alignment" content="center" vertical={false}>
                <bd.Badge color="primary" dot position="top-start">
                    <SvgEmail />
                </bd.Badge>
                <bd.Badge color="primary" dot position="top-end">
                    <SvgEmail />
                </bd.Badge>
                <bd.Badge color="primary" dot position="bottom-start">
                    <SvgEmail />
                </bd.Badge>
                <bd.Badge color="primary" dot position="bottom-end">
                    <SvgEmail />
                </bd.Badge>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Badge color='primary' dot position='top-start'>...</bd.Badge>",
                    "<bd.Badge color='primary' dot position='top-end'>...</bd.Badge>",
                    "<bd.Badge color='primary' dot position='bottom-start'>...</bd.Badge>",
                    "<bd.Badge color='primary' dot position='bottom-end'>...</bd.Badge>",
                ]}
            />
        </div>
    );
};
