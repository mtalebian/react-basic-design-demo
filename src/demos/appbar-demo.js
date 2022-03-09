import React from "react";
import SvgAccountCircle from "../icons/AccountCircle";
import SvgEmail from "../icons/Email";
import SvgMenu from "../icons/Menu";
import SvgMoreVert from "../icons/MoreVert";
import SvgSearch from "../icons/Search";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const AppBarDemo = () => {
    const menuAccount = (
        <bd.Menu className="mt-n3 shadow-4 border-0">
            <bd.MenuItem>User Profige</bd.MenuItem>
            <bd.MenuItem>Settings</bd.MenuItem>
            <bd.MenuItem>Logout</bd.MenuItem>
        </bd.Menu>
    );

    const menuMore = (
        <bd.Menu className="mt-n3 shadow-4 border-0">
            <bd.SubMenu menu={menuAccount} className="py-2">
                <span className="m-e-3">
                    <SvgAccountCircle />
                </span>
                Profile
            </bd.SubMenu>
            <bd.MenuItem className="py-2">
                <span className="m-e-3">
                    <SvgSearch />
                </span>
                Search
            </bd.MenuItem>
        </bd.Menu>
    );

    return (
        <>
            <div style={{ maxWidth: 900 }}>
                <h1>App Bar</h1>
                <p>
                    The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles,
                    navigation, and actions.
                </p>
                <p className="mb-5">It can transform into a contextual action bar or be used as a navbar. .</p>

                <Example title="Basic App Bar" shaded>
                    <bd.AppBar position="static">
                        <bd.Toolbar>
                            <bd.Button variant="icon" color="inherit" edge="start">
                                <SvgMenu />
                            </bd.Button>
                            <h5 className="appbar-title">News</h5>

                            <bd.Button color="inherit">LOGIN</bd.Button>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.AppBar position='static'>",
                        "    <bd.Toolbar>",
                        "        <bd.Button variant='icon' color='inherit' edge='start'>",
                        "            <SvgMenu />",
                        "        </bd.Button>",
                        "        <h5 className='appbar-title'>News</h5>",
                        "        <bd.Button color='inherit'>LOGIN</bd.Button>",
                        "    </bd.Toolbar>",
                        "</bd.AppBar>",
                    ]}
                />

                <Example title="App Bar with menu" shaded>
                    <bd.AppBar position="static">
                        <bd.Toolbar>
                            <h5 className="appbar-title">LOGO</h5>

                            <bd.Button variant="icon" color="inherit" edge="end" menu={menuMore}>
                                <SvgMoreVert />
                            </bd.Button>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode
                    lines={[
                        "const menuAccount = (...);",
                        "    <bd.Menu className='mt-n3 shadow-4 border-0'>",
                        "        <bd.MenuItem>User Profige</bd.MenuItem>",
                        "        ...",
                        "    </bd.Menu>",
                        ");",
                        "",
                        "const menuMore = (",
                        "    <bd.Menu className='mt-n3 shadow-4 border-0'>",
                        "        <bd.SubMenu menu={menuAccount} className='py-2'>",
                        "            <span className='m-e-3'> <SvgAccountCircle /> </span>",
                        "            Profile",
                        "        </bd.SubMenu>",
                        "        <bd.MenuItem className='py-2'>",
                        "            <span className='m-e-3'> <SvgSearch /> </span>",
                        "            Search",
                        "        </bd.MenuItem>",
                        "    </bd.Menu>",
                        ");",
                        "",
                        "",
                        "<bd.AppBar position='static'>",
                        "    <bd.Toolbar>",
                        "        <h5 className='appbar-title'>LOGO</h5>",
                        "        <bd.Button variant='icon' color='inherit' edge='end' menu={menuMore}>",
                        "            <SvgMoreVert />",
                        "        </bd.Button>",
                        "    </bd.Toolbar>",
                        "</bd.AppBar>",
                    ]}
                />

                <Example title="App Bar with search field" shaded>
                    <bd.AppBar position="static">
                        <bd.Toolbar>
                            <h5 className="pe-3 appbar-title">LOGO</h5>

                            <div className="toolbar-input flex-grow-1 flex-md-grow-0">
                                <span className="icon">
                                    <SvgSearch />
                                </span>
                                <input type="text" className="has-icon" />
                            </div>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.AppBar position='static'>",
                        "    <bd.Toolbar>",
                        "        <h5 className='pe-3 appbar-title'>LOGO</h5>",
                        "        <div className='toolbar-input flex-grow-1 flex-md-grow-0'>",
                        "            <span className='icon'> <SvgSearch /> </span>",
                        "            <input type='text' className='has-icon' />",
                        "        </div>",
                        "    </bd.Toolbar>",
                        "</bd.AppBar>",
                    ]}
                />

                <Example title="App Bar with badges" shaded>
                    <bd.AppBar position="static">
                        <bd.Toolbar>
                            <h5 className="appbar-title">LOGO</h5>

                            <bd.Button variant="icon" color="inherit" className="d-none d-sm-block">
                                <bd.Badge value={2} className="bg-danger text-white" position="top-end">
                                    <SvgEmail />
                                </bd.Badge>
                            </bd.Button>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.AppBar position='static'>",
                        "    <bd.Toolbar>",
                        "        <h5 className='appbar-title'>LOGO</h5>",
                        "        <bd.Button variant='icon' color='inherit' className='d-none d-sm-block'>",
                        "            <bd.Badge value={2} className='bg-danger text-white' position='top-end'>",
                        "                <SvgEmail />",
                        "            </bd.Badge>",
                        "        </bd.Button>",
                        "    </bd.Toolbar>",
                        "</bd.AppBar>",
                    ]}
                />

                <Example title="Dense" shaded>
                    <bd.AppBar position="static">
                        <bd.Toolbar size="md">
                            <h5 className="appbar-title">LOGO</h5>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode lines={["<bd.AppBar position='static'>", "    <bd.Toolbar size='md'> ... </bd.Toolbar>", "</bd.AppBar>"]} />

                <Example title="Prominent" shaded>
                    <bd.AppBar prominent>
                        <bd.Toolbar size="md">
                            <bd.Button variant="icon" color="inherit" edge="start">
                                <SvgMenu />
                            </bd.Button>

                            <h5 className="appbar-title">LOGO</h5>

                            <bd.Button variant="icon" color="inherit" edge="end" menu={menuMore}>
                                <SvgMoreVert />
                            </bd.Button>
                        </bd.Toolbar>
                    </bd.AppBar>
                </Example>
                <SourceCode lines={["<bd.AppBar prominent> ... </bd.AppBar>"]} />
            </div>
        </>
    );
};
