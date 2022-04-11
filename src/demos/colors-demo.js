import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode, Props } from "./demo-components";

export const ColorsDemo = () => {
    return (
        <>
            <h1 className="mb-5">Colors</h1>

            <Example title="Text Colors" vertical={false} gap={5}>
                <bd.Flex>
                    <dl>
                        <dd>
                            <span className="p-3 text-inherit">Sample Text</span>
                            .text-inherit
                        </dd>
                        <dd>
                            <span className="p-3 text-default">Sample Text</span>
                            .text-default
                        </dd>
                        <dd>
                            <span className="p-3 text-primary-text">Sample Text</span>
                            .text-primary-text
                        </dd>
                        <dd>
                            <span className="p-3 text-secondary-text">Sample Text</span>
                            .text-secondary-text
                        </dd>
                        <dd>
                            <span className="p-3 text-muted">Sample Text</span>
                            .text-muted
                        </dd>
                        <dd>
                            <span className="p-3 text-primary">Sample Text</span>
                            .text-primary
                        </dd>
                        <dd>
                            <span className="p-3 text-secondary">Sample Text</span>
                            .text-secondary
                        </dd>

                        <dd>
                            <span className="p-3 text-danger">Sample Text</span>
                            .text-danger
                        </dd>
                        <dd>
                            <span className="p-3 text-info">Sample Text</span>
                            .text-info
                        </dd>
                        <dd>
                            <span className="p-3 text-warning">Sample Text</span>
                            .text-warning
                        </dd>
                        <dd>
                            <span className="p-3 text-success">Sample Text</span>
                            .text-success
                        </dd>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dd>
                            <span className="p-3 text-shade-10">Sample Text</span>
                            .text-shade-10
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-20">Sample Text</span>
                            .text-shade-20
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-30">Sample Text</span>
                            .text-shade-30
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-40">Sample Text</span>
                            .text-shade-40
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-50">Sample Text</span>
                            .text-shade-50
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-60">Sample Text</span>
                            .text-shade-60
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-70">Sample Text</span>
                            .text-shade-70
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-80">Sample Text</span>
                            .text-shade-80
                        </dd>
                        <dd>
                            <span className="p-3 text-shade-90">Sample Text</span>
                            .text-shade-90
                        </dd>
                    </dl>
                </bd.Flex>
            </Example>

            <Example title="Background Colors" vertical={false} gap={5}>
                <bd.Flex>
                    <dl>
                        <dd>
                            <span className="small-box bg-inherit">.bg-inherit</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-default">bg-default</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-primary">.bg-primary</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-secondary">.bg-secondary</span>
                        </dd>

                        <dd>
                            <span className="small-box bg-danger">.bg-danger</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-info">.bg-info</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-warning">.bg-warning</span>
                        </dd>
                        <dd>
                            <span className="small-box bg-success">.bg-success</span>
                        </dd>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box bg-gray-1">.bg-gray-1</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-2">.bg-gray-2</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-3">.bg-gray-3</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-4">.bg-gray-4</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-5">.bg-gray-5</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-10">.bg-gray-10</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-20">.bg-gray-20</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-30">.bg-gray-30</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-40">.bg-gray-40</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-50">.bg-gray-50</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-60">.bg-gray-60</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-70">.bg-gray-70</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-80">.bg-gray-80</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-90">.bg-gray-90</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-95">.bg-gray-95</span>
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box bg-shade-1">.bg-shade-1</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-2">.bg-shade-2</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-3">.bg-shade-3</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-4">.bg-shade-4</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-5">.bg-shade-5</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-10">.bg-shade-10</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-20">.bg-shade-20</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-30">.bg-shade-30</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-40">.bg-shade-40</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-50">.bg-shade-50</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-60">.bg-shade-60</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-70">.bg-shade-70</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-80">.bg-shade-80</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-90">.bg-shade-90</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-95">.bg-shade-95</span>
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex className="bg-info">
                    <dl>
                        <dt>
                            <span className="small-box bg-shade-1">.bg-shade-1</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-2">.bg-shade-2</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-3">.bg-shade-3</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-4">.bg-shade-4</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-5">.bg-shade-5</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-10">.bg-shade-10</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-20">.bg-shade-20</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-30">.bg-shade-30</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-40">.bg-shade-40</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-50">.bg-shade-50</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-60">.bg-shade-60</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-70">.bg-shade-70</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-80">.bg-shade-80</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-90">.bg-shade-90</span>
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-95">.bg-shade-95</span>
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box hover-shade-1">.hover-shade-1</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-2">.hover-shade-2</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-3">.hover-shade-3</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-4">.hover-shade-4</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-5">.hover-shade-5</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-10">.hover-shade-10</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-20">.hover-shade-20</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-30">.hover-shade-30</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-40">.hover-shade-40</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-50">.hover-shade-50</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-60">.hover-shade-60</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-70">.hover-shade-70</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-80">.hover-shade-80</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-90">.hover-shade-90</span>
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-95">.hover-shade-95</span>
                        </dt>
                    </dl>
                </bd.Flex>
            </Example>
        </>
    );
};
