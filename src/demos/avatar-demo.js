import React from "react";
import SvgEmail from "../icons/Email";
import SvgNotificationsActive from "../icons/NotificationsActive";
import SvgSearch from "../icons/Search";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const AvatarDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1>Avatar</h1>

            <Example title="Image avatars" vertical={false} content="center">
                <bd.Avatar src="https://mui.com//static/images/avatar/1.jpg" />
                <bd.Avatar src="https://mui.com//static/images/avatar/2.jpg" />
                <bd.Avatar src="https://mui.com//static/images/avatar/3.jpg" />
            </Example>
            <SourceCode lines={["<bd.Avatar src='...' />"]} />

            <Example title="Letter avatars" vertical={false} content="center">
                <bd.Avatar>H</bd.Avatar>
                <bd.Avatar className="bg-warning">N</bd.Avatar>
                <bd.Avatar className="bg-danger">OP</bd.Avatar>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Avatar>H</bd.Avatar>",
                    "<bd.Avatar className='bg-warning'>N</bd.Avatar>",
                    "<bd.Avatar className='bg-danger'>OP</bd.Avatar>",
                ]}
            />

            <Example title="Sizes" vertical={false} content="center">
                <bd.Avatar size="sm" src="https://mui.com//static/images/avatar/1.jpg" />
                <bd.Avatar src="https://mui.com//static/images/avatar/1.jpg" />
                <bd.Avatar size="lg" src="https://mui.com//static/images/avatar/1.jpg" />
            </Example>
            <SourceCode lines={["<bd.Avatar size='sm' src='...' />", "<bd.Avatar src='...' />", "<bd.Avatar size='lg' src='...' />"]} />

            <Example title="Icon avatars" vertical={false} content="center">
                <bd.Avatar className="bg-info">
                    <SvgEmail />
                </bd.Avatar>

                <bd.Avatar className="bg-primary">
                    <SvgNotificationsActive />
                </bd.Avatar>

                <bd.Avatar className="bg-success">
                    <SvgSearch />
                </bd.Avatar>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Avatar className='bg-info'> <SvgEmail /> </bd.Avatar>",
                    "<bd.Avatar className='bg-primary'> <SvgNotificationsActive /> </bd.Avatar>",
                    "<bd.Avatar className='bg-success'> <SvgSearch /> </bd.Avatar>",
                ]}
            />

            <Example title="Square and Rounded" vertical={false} content="center">
                <bd.Avatar className="bg-info" square>
                    <SvgEmail />
                </bd.Avatar>
                <bd.Avatar className="bg-primary" rounded>
                    <SvgNotificationsActive />
                </bd.Avatar>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Avatar className='bg-info' square><SvgEmail /></bd.Avatar>",
                    "<bd.Avatar className='bg-primary' rounded><SvgNotificationsActive /></bd.Avatar>",
                ]}
            />

            <Example title="Grouped" vertical={false} content="center">
                <bd.AvatarGroup className="bg-info">
                    <bd.Avatar>+2</bd.Avatar>
                    <bd.Avatar src="https://mui.com//static/images/avatar/3.jpg" />
                    <bd.Avatar src="https://mui.com//static/images/avatar/2.jpg" />
                    <bd.Avatar src="https://mui.com//static/images/avatar/1.jpg" />
                </bd.AvatarGroup>
            </Example>
            <SourceCode
                lines={[
                    "<bd.AvatarGroup className='bg-info'>",
                    "	<bd.Avatar>+2</bd.Avatar>",
                    "	<bd.Avatar src='...' />",
                    "	<bd.Avatar src='...' />",
                    "	<bd.Avatar src='...' />",
                    "</bd.AvatarGroup>",
                ]}
            />

            <Example title="With badge" vertical={false} content="center">
                <bd.Badge className="bg-danger text-danger" position="top-end" overlapCircle anim dot>
                    <bd.Avatar className="bg-info">
                        <SvgEmail />
                    </bd.Avatar>
                </bd.Badge>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Badge className='bg-danger text-danger' position='top-end' overlapCircle anim dot>",
                    "	<bd.Avatar className='bg-info'> <SvgEmail /> </bd.Avatar>",
                    "</bd.Badge>",
                ]}
            />
        </div>
    );
};
