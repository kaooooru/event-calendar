import { Layout, Row, Col, List, Avatar, Space, Calendar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "../../redux/events/actions";

const { Content } = Layout;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const onPanelChange = (value, mode) => {
    console.log(value, mode);
}

const extraPic = (category) => {
    if (category === 'travel') {
        return (
            <img
                width={300}
                height={170}
                alt="logo"
                src="/img/travel.jpg"
            />
        )
    } else if (category === 'culture') {
        return (
            <img
                width={300}
                height={170}
                alt="logo"
                src="/img/culture.jpg"
            />
        )
    } else if (category === 'food') {
        return (
            <img
                width={300}
                height={170}
                alt="logo"
                src="/img/food.jpg"
            />
        )
    } else if (category === 'music') {
        return (
            <img
                width={300}
                height={170}
                alt="logo"
                src="/img/music.jpg"
            />
        )
    } else if (category === 'film') {
        return (
            <img
                width={300}
                height={170}
                alt="logo"
                src="/img/film.jpg"
            />
        )
    }
}

const PageContent = () => {
    const [date, setDate] = useState('');

    const dispatch = useDispatch();
    
    useEffect(
        () => {
            const info = {
                date: date,
            };
            dispatch(fetchEvent(info))
        },
        [date]
    );

    const listData = useSelector(state => state.eventReducer.data)

    return(
        <Content 
            className="site-layout-background" 
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <Row>
                <Col xs={24} lg={16}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                            Let's meet up!
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                              key={item.title}
                              actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                              ]}
                              extra={
                                extraPic(item.category)
                              }
                            >
                              <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                              />
                              {item.content}
                            </List.Item>
                          )}
                    />
                </Col>
                <Col xs={24} lg={8}>
                    <Calendar className="site-calendar" fullscreen={false} onPanelChange={onPanelChange} onChange={date => setDate(moment(date).format("YYYY-MM-DD"))} />
                </Col>
            </Row>
        </Content>
        
    );
};

export default PageContent;

