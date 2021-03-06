import React from "react";
import * as bd from "react-basic-design";
import SvgArrowUpward from "../icons/ArrowUpward";
import SvgFormatTextdirectionRToL from "../icons/FormatTextdirectionRToL";
import { Example } from "./demo-components";

export const NewCssDemo = () => {
    return (
        <>
            <div style={{ maxWidth: 700 }}>
                <h1 className="mb-5">New CSS</h1>

                <Example title="Borders">
                    <bd.Flex>
                        <div className="border-start p-3 ltr">
                            <b>.border-start</b>
                        </div>
                        <div className="border-end m-s-auto p-3 ltr">
                            <b>.border-end</b>
                        </div>
                    </bd.Flex>

                    <bd.Flex content="center" className="ltr">
                        <div className="border border-primary p-3">
                            <b>.border-primary</b>
                        </div>
                        <div className="border border-secondary p-3 m-s-3 text-nowrap">
                            <b>.border-secondary</b>
                        </div>
                    </bd.Flex>
                </Example>

                <Example title="Text alignment">
                    <div className="text-start border p-3">
                        <b>.text-start</b>
                    </div>
                    <div className="text-end border p-3">
                        <b>.text-end</b>
                    </div>
                </Example>

                <Example title="Padding">
                    <div className="text-start border py-3 p-s-5">Start padding</div>
                    <div className="text-end border py-3 p-e-5">End padding</div>
                    <bd.Flex>
                        <dl className="ltr">
                            <dt>.p-s-0</dt>
                            <dt>.p-s-1</dt>
                            <dt>.p-s-2</dt>
                            <dt>.p-s-3</dt>
                            <dt>.p-s-4</dt>
                            <dt>.p-s-5</dt>
                        </dl>
                        <dl className="ltr m-s-5">
                            <dt>.p-e-0</dt>
                            <dt>.p-e-1</dt>
                            <dt>.p-e-2</dt>
                            <dt>.p-e-3</dt>
                            <dt>.p-e-4</dt>
                            <dt>.p-e-5</dt>
                        </dl>
                    </bd.Flex>
                </Example>

                <Example title="Margin">
                    <div className="text-start">
                        <div className=" p-3 m-s-5 bg-shade-10">Start margin</div>
                    </div>
                    <div className="text-end">
                        <div className=" p-3 m-e-5  bg-shade-10">End margin</div>
                    </div>
                    <bd.Flex>
                        <dl className="ltr">
                            <dt>.m-s-auto</dt>
                            <dt>.m-s-0</dt>
                            <dt>
                                .m-s-1, <span className="fw-normal text-secondary">.m-s-n1</span>
                            </dt>
                            <dt>
                                .m-s-2, <span className="fw-normal text-secondary">.m-s-n2</span>
                            </dt>
                            <dt>
                                .m-s-3, <span className="fw-normal text-secondary">.m-s-n3</span>
                            </dt>
                            <dt>
                                .m-s-4, <span className="fw-normal text-secondary">.m-s-n4</span>
                            </dt>
                            <dt>
                                .m-s-5, <span className="fw-normal text-secondary">.m-s-n5</span>
                            </dt>
                        </dl>
                        <dl className="ltr m-s-5">
                            <dt>.m-e-auto</dt>
                            <dt>.m-e-0</dt>
                            <dt>
                                .m-e-1, <span className="fw-normal text-secondary">.m-e-n1</span>
                            </dt>
                            <dt>
                                .m-e-2, <span className="fw-normal text-secondary">.m-e-n2</span>
                            </dt>
                            <dt>
                                .m-e-3, <span className="fw-normal text-secondary">.m-e-n3</span>
                            </dt>
                            <dt>
                                .m-e-4, <span className="fw-normal text-secondary">.m-e-n4</span>
                            </dt>
                            <dt>
                                .m-e-5, <span className="fw-normal text-secondary">.m-e-n5</span>
                            </dt>
                        </dl>
                    </bd.Flex>
                </Example>

                <Example title="Rotate">
                    <bd.Flex className="text-center" align="end" content="between">
                        <div>
                            <SvgFormatTextdirectionRToL />
                            <div>NORMAL</div>
                        </div>
                        <div>
                            <SvgFormatTextdirectionRToL className="rotate-90" />
                            <div>.rotate-90</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rotate-n90" />
                            <div>.rotate-n90</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rotate-180" />
                            <div>.rotate-180</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rotate-270" />
                            <div>.rotate-270</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rotate-n270" />
                            <div>.rotate-n270</div>
                        </div>
                    </bd.Flex>
                </Example>

                <Example
                    title={
                        <bd.Button variant="contained" onClick={() => bd.helper.setRTL(true)}>
                            RTL
                        </bd.Button>
                    }
                >
                    <bd.Flex className="text-center" align="end" content="between">
                        <div>
                            <SvgFormatTextdirectionRToL />
                            <div>NORMAL</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rtl-rotate-180" />
                            <div>.rtl-rotate-180</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rtl-d-none" />
                            <div>.rtl-d-none</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="rtl-d-block" />
                            <div>.rtl-d-block</div>
                        </div>
                    </bd.Flex>
                </Example>

                <Example
                    title={
                        <bd.Button variant="contained" onClick={() => bd.helper.setRTL(false)}>
                            ltr
                        </bd.Button>
                    }
                >
                    <bd.Flex className="text-center" align="end" content="between">
                        <div>
                            <SvgFormatTextdirectionRToL />
                            <div>NORMAL</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="ltr-rotate-180" />
                            <div>.ltr-rotate-180</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="ltr-d-none" />
                            <div>.ltr-d-none</div>
                        </div>

                        <div>
                            <SvgFormatTextdirectionRToL className="ltr-d-block" />
                            <div>.ltr-d-block</div>
                        </div>
                    </bd.Flex>
                </Example>
            </div>
        </>
    );
};
