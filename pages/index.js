import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SubCount from '../components/SubCount';

class Index extends Component {
  state = {
    subscriberCount: undefined,
  };

  componentDidMount() {
    const subCount = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this
      .props.channelId}&key=${process.env.YT_KEY}`;

    const getSubscriberCount = async () => {
      const getSubCount = await fetch(subCount).then(r => r.json());
      const { subscriberCount } = getSubCount.items[0].statistics;
      this.setState({ subscriberCount });
      console.log(subscriberCount);
    };
    setTimeout(async () => {
      getSubscriberCount();
    }, 1000);
    getSubscriberCount();
  }

  render() {
    const { channelId } = this.props;
    const { subscriberCount } = this.state;
    return (
      <div>
        <SubCount channel={channelId} count={subscriberCount} />
        <style jsx global>{`
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
            font-weight: normal;
          }

          html {
            font-size: 10px;
          }

          body {
            background: #222;
            font-family: -apple-system, system-ui;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

Index.getInitialProps = async ({ query }) => {
  const { channel } = query;
  const nameToId = `https://www.googleapis.com/youtube/v3/channels?key=${process
    .env.YT_KEY}&forUsername=${channel}&part=id`;

  const getChannelId = await fetch(nameToId).then(r => r.json());
  const channelId = getChannelId.items[0].id;
  return { channelId };
};

export default Index;
