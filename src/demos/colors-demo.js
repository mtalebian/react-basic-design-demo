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
                            <span className="small-box bg-inherit"></span> .bg-inherit
                        </dd>
                        <dd>
                            <span className="small-box bg-default"></span> .bg-default
                        </dd>
                        <dd>
                            <span className="small-box bg-primary"></span> .bg-primary
                        </dd>
                        <dd>
                            <span className="small-box bg-secondary"></span> .bg-secondary
                        </dd>

                        <dd>
                            <span className="small-box bg-danger"></span> .bg-danger
                        </dd>
                        <dd>
                            <span className="small-box bg-info"></span> .bg-info
                        </dd>
                        <dd>
                            <span className="small-box bg-warning"></span> .bg-warning
                        </dd>
                        <dd>
                            <span className="small-box bg-success"></span> .bg-success
                        </dd>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box bg-gray-1"></span> .bg-gray-1
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-2"></span> .bg-gray-2
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-3"></span> .bg-gray-3
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-4"></span> .bg-gray-4
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-5"></span> .bg-gray-5
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-10"></span> .bg-gray-10
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-20"></span> .bg-gray-20
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-30"></span> .bg-gray-30
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-40"></span> .bg-gray-40
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-50"></span> .bg-gray-50
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-60"></span> .bg-gray-60
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-70"></span> .bg-gray-70
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-80"></span> .bg-gray-80
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-90"></span> .bg-gray-90
                        </dt>
                        <dt>
                            <span className="small-box bg-gray-95"></span> .bg-gray-95
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box bg-shade-1"></span> .bg-shade-1
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-2"></span> .bg-shade-2
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-3"></span> .bg-shade-3
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-4"></span> .bg-shade-4
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-5"></span> .bg-shade-5
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-10"></span> .bg-shade-10
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-20"></span> .bg-shade-20
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-30"></span> .bg-shade-30
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-40"></span> .bg-shade-40
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-50"></span> .bg-shade-50
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-60"></span> .bg-shade-60
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-70"></span> .bg-shade-70
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-80"></span> .bg-shade-80
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-90"></span> .bg-shade-90
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-95"></span> .bg-shade-95
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex className="bg-info">
                    <dl>
                        <dt>
                            <span className="small-box bg-shade-1"></span> .bg-shade-1
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-2"></span> .bg-shade-2
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-3"></span> .bg-shade-3
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-4"></span> .bg-shade-4
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-5"></span> .bg-shade-5
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-10"></span> .bg-shade-10
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-20"></span> .bg-shade-20
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-30"></span> .bg-shade-30
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-40"></span> .bg-shade-40
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-50"></span> .bg-shade-50
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-60"></span> .bg-shade-60
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-70"></span> .bg-shade-70
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-80"></span> .bg-shade-80
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-90"></span> .bg-shade-90
                        </dt>
                        <dt>
                            <span className="small-box bg-shade-95"></span> .bg-shade-95
                        </dt>
                    </dl>
                </bd.Flex>

                <bd.Flex>
                    <dl>
                        <dt>
                            <span className="small-box hover-shade-1"></span> .hover-shade-1
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-2"></span> .hover-shade-2
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-3"></span> .hover-shade-3
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-4"></span> .hover-shade-4
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-5"></span> .hover-shade-5
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-10"></span> .hover-shade-10
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-20"></span> .hover-shade-20
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-30"></span> .hover-shade-30
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-40"></span> .hover-shade-40
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-50"></span> .hover-shade-50
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-60"></span> .hover-shade-60
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-70"></span> .hover-shade-70
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-80"></span> .hover-shade-80
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-90"></span> .hover-shade-90
                        </dt>
                        <dt>
                            <span className="small-box hover-shade-95"></span> .hover-shade-95
                        </dt>
                    </dl>
                </bd.Flex>
            </Example>
        </>
    );
};
