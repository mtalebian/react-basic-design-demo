import React from "react";
import { Tab } from "react-bootstrap";
import SvgAccountCircle from "../icons/AccountCircle";
import SvgEmail from "../icons/Email";
import SvgHome from "../icons/Home";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const TabsDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1 className="mb-5">Tabs</h1>

            <Example title="Basic tabstrip">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip className="border-bottom">
                        <bd.TabStripItem eventKey="a">Item One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Item Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Item Three</bd.TabStripItem>
                        <bd.TabStripItem eventKey="d" disabled>
                            Disabled tab
                        </bd.TabStripItem>
                    </bd.TabStrip>
                    <Tab.Content className="m-3">
                        <Tab.Pane eventKey="a">Page One</Tab.Pane>
                        <Tab.Pane eventKey="b">Page Two</Tab.Pane>
                        <Tab.Pane eventKey="c">Page Three</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Example>
            <SourceCode
                lines={[
                    "<Tab.Container defaultActiveKey='a'>",
                    "	<bd.TabStrip className='border-bottom'>",
                    "		<bd.TabStripItem eventKey='a'>Item One</bd.TabStripItem>",
                    "		<bd.TabStripItem eventKey='b'>Item Two</bd.TabStripItem>",
                    "		<bd.TabStripItem eventKey='c'>Item Three</bd.TabStripItem>",
                    "		<bd.TabStripItem eventKey='d' disabled>",
                    "			Disabled tab",
                    "		</bd.TabStripItem>",
                    "	</bd.TabStrip>",
                    "	<Tab.Content className='m-3'>",
                    "		<Tab.Pane eventKey='a'>Page One</Tab.Pane>",
                    "		<Tab.Pane eventKey='b'>Page Two</Tab.Pane>",
                    "		<Tab.Pane eventKey='c'>Page Three</Tab.Pane>",
                    "	</Tab.Content>",
                    "</Tab.Container>",
                ]}
            />

            <Example title="Wrapped labels">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip className="border-bottom">
                        <bd.TabStripItem eventKey="a" wrapped>
                            New Arrivals in the Longest Text of Nonfiction that should appear in the next line
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Item Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Item Three</bd.TabStripItem>
                    </bd.TabStrip>
                    <Tab.Content className="m-3">
                        <Tab.Pane eventKey="a">Page One</Tab.Pane>
                        <Tab.Pane eventKey="b">Page Two</Tab.Pane>
                        <Tab.Pane eventKey="c">Page Three</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStripItem eventKey='a' wrapped>...</bd.TabStripItem>"]} />

            <Example title="Colored tab">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip textColor="secondary">
                        <bd.TabStripItem eventKey="a">Item One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Item Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Item Three</bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStrip textColor='secondary'>...</bd.TabStrip>"]} />

            <Example title="Full width">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip variant="fullWidth">
                        <bd.TabStripItem eventKey="a">Item One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Item Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Item Three</bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStrip variant='fullWidth'>...</bd.TabStrip>"]} />

            <Example title="Centered">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip variant="centered">
                        <bd.TabStripItem eventKey="a">Item One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Item Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Item Three</bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStrip variant='centered'>...</bd.TabStrip>"]} />

            <Example title="Scrollable tabs">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip>
                        <bd.TabStripItem eventKey="a">Tab One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Tab Two</bd.TabStripItem>

                        <bd.TabStripItem eventKey="dis" disabled>
                            Disabled Tab
                        </bd.TabStripItem>

                        <bd.TabStripItem eventKey="10">Tab # 10</bd.TabStripItem>
                        <bd.TabStripItem eventKey="11">Tab # 11</bd.TabStripItem>
                        <bd.TabStripItem eventKey="12">Tab # 12</bd.TabStripItem>
                        <bd.TabStripItem eventKey="13">Tab # 13</bd.TabStripItem>
                        <bd.TabStripItem eventKey="14">Tab # 14</bd.TabStripItem>
                        <bd.TabStripItem eventKey="15">Tab # 15</bd.TabStripItem>
                        <bd.TabStripItem eventKey="16">Tab # 16</bd.TabStripItem>
                        <bd.TabStripItem eventKey="17">Tab # 17</bd.TabStripItem>
                        <bd.TabStripItem eventKey="18">Tab # 18</bd.TabStripItem>
                        <bd.TabStripItem eventKey="19">Tab # 19</bd.TabStripItem>
                        <bd.TabStripItem eventKey="20">Tab # 20</bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode lines={[]} />

            <Example title="Prevent scroll buttons">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip scrollButtons="off">
                        <bd.TabStripItem eventKey="a">Tab One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Tab Two</bd.TabStripItem>

                        <bd.TabStripItem eventKey="dis" disabled>
                            Disabled Tab
                        </bd.TabStripItem>

                        <bd.TabStripItem eventKey="10">Tab # 10</bd.TabStripItem>
                        <bd.TabStripItem eventKey="11">Tab # 11</bd.TabStripItem>
                        <bd.TabStripItem eventKey="12">Tab # 12</bd.TabStripItem>
                        <bd.TabStripItem eventKey="13">Tab # 13</bd.TabStripItem>
                        <bd.TabStripItem eventKey="14">Tab # 14</bd.TabStripItem>
                        <bd.TabStripItem eventKey="15">Tab # 15</bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStrip scrollButtons='off'>...</bd.TabStrip>"]} />

            <Example title="Vertical tabs">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip variant="vertical" className="border-end" style={{ maxHeight: 200 }}>
                        <bd.TabStripItem eventKey="a">Tab One</bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">Tab Two</bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">Tab Three</bd.TabStripItem>

                        <bd.TabStripItem eventKey="dis" disabled>
                            Disabled Tab
                        </bd.TabStripItem>

                        <bd.TabStripItem eventKey="10">Tab # 10</bd.TabStripItem>
                        <bd.TabStripItem eventKey="11">Tab # 11</bd.TabStripItem>
                        <bd.TabStripItem eventKey="12">Tab # 12</bd.TabStripItem>
                        <bd.TabStripItem eventKey="13">Tab # 13</bd.TabStripItem>
                        <bd.TabStripItem eventKey="14">Tab # 14</bd.TabStripItem>
                        <bd.TabStripItem eventKey="15">Tab # 15</bd.TabStripItem>
                    </bd.TabStrip>

                    <Tab.Content className="p-3 flex-1">
                        <Tab.Pane eventKey="a">Page One</Tab.Pane>
                        <Tab.Pane eventKey="b">Page Two</Tab.Pane>
                        <Tab.Pane eventKey="c">Page Three</Tab.Pane>

                        <Tab.Pane eventKey="10">Page 10</Tab.Pane>
                        <Tab.Pane eventKey="11">Page 11</Tab.Pane>
                        <Tab.Pane eventKey="12">Page 12</Tab.Pane>
                        <Tab.Pane eventKey="13">Page 13</Tab.Pane>
                        <Tab.Pane eventKey="14">Page 14</Tab.Pane>
                        <Tab.Pane eventKey="15">Page 15</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Example>
            <SourceCode lines={["<bd.TabStrip variant='vertical' className='border-end' style={{ maxHeight: 200 }}>...</bd.TabStrip>"]} />

            <Example title="Icon tabs">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip variant="centered">
                        <bd.TabStripItem eventKey="a">
                            <SvgHome />
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="b">
                            <SvgAccountCircle />
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">
                            <SvgEmail />
                        </bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode
                lines={[
                    "<bd.TabStrip variant='centered'>",
                    "	<bd.TabStripItem eventKey='a'>",
                    "		<SvgHome />",
                    "	</bd.TabStripItem>",
                    "	<bd.TabStripItem eventKey='b'>",
                    "		<SvgAccountCircle />",
                    "	</bd.TabStripItem>",
                    "	<bd.TabStripItem eventKey='c'>",
                    "		<SvgEmail />",
                    "	</bd.TabStripItem>",
                    "</bd.TabStrip>",
                ]}
            />

            <Example title="Icon position">
                <Tab.Container defaultActiveKey="a">
                    <bd.TabStrip variant="centered">
                        <bd.TabStripItem eventKey="a" className="flex-column">
                            <SvgHome />
                            <span>HOME</span>
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="b" className="flex-column">
                            <span>ACCOUNT</span>
                            <SvgAccountCircle />
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="c">
                            <SvgEmail />
                            <span className="m-s-1">EMAIL</span>
                        </bd.TabStripItem>
                        <bd.TabStripItem eventKey="d">
                            <span className="m-e-1">EMAIL</span>
                            <SvgEmail />
                        </bd.TabStripItem>
                    </bd.TabStrip>
                </Tab.Container>
            </Example>
            <SourceCode
                lines={[
                    "<bd.TabStrip variant='centered'>",
                    "	<bd.TabStripItem eventKey='a' className='flex-column'>",
                    "		<SvgHome />",
                    "		<span>HOME</span>",
                    "	</bd.TabStripItem>",
                    "	<bd.TabStripItem eventKey='b' className='flex-column'>",
                    "		<span>ACCOUNT</span>",
                    "		<SvgAccountCircle />",
                    "	</bd.TabStripItem>",
                    "	<bd.TabStripItem eventKey='c'>",
                    "		<SvgEmail />",
                    "		<span className='m-s-1'>EMAIL</span>",
                    "	</bd.TabStripItem>",
                    "	<bd.TabStripItem eventKey='d'>",
                    "		<span className='m-e-1'>EMAIL</span>",
                    "		<SvgEmail />",
                    "	</bd.TabStripItem>",
                    "</bd.TabStrip>",
                ]}
            />
        </div>
    );
};
