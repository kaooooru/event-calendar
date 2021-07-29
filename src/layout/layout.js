import { Layout } from 'antd';
import React, { useState } from 'react';
import PageContent from './layoutcontent/pagecontent';
import SiteHeader from './layoutheader/siteheader';
import Siderbar from './layoutsidebar/siderbar';

const SiteLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <Layout style={{ minheight:"100vh" }}>
            <Siderbar collapsed={collapsed} />
            <Layout className="site-layout">
                <SiteHeader collapsed={collapsed} toggle={toggle} />
                <PageContent />
            </Layout>
        </Layout>
    );
}

export default SiteLayout;