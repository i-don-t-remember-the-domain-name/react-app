# HackerSalt 🧂

https://www.hackersalt.com

HackerSalt is an app that lets you see how "salty" any HackerNews commenter is. Search by username or browse the ranks of the "Saltiest". We've taken the open source HackerNews dataset and used sentiment analysis to generate summaries of usage across commenters' lifetimes.

Please explore. 🙂 We've prepared visualizations & dashboards of commenters' activity for your curiosity. Just be prepared there's some really nasty trolls out there.

## Table of Contents

- [Demo](#demo)
- [Contributors](#contributors)
- [Technologies used and dependencies](#built-with)
- [Installation](#installation)
- [Environment variables](#environment-variables)
- [API](#api)
- [Endpoints description](#endpoints-description)
- [Contribution guidelines](#contribution-guidelines)

## Demo

For more information on app, you can check out our [ProductHunt HackerSalt page](https://www.producthunt.com/posts/hackersalt/).

## Contributors

HackerSalt was developed by a Ivana and Britton based on idea from Lambda School build week. 🚀

<table>
	<tr>
		<td align="center">
			<a href="https://github.com/ivanahuckova">
				<img src="https://avatars1.githubusercontent.com/u/30407135?s=460&v=4" width="128px;" alt="Ivana Huckova"/>
				<br />
				<sub>
					<b>Ivana Huckova</b>
					<p>Full-stack Developer</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/BrittonWinterrose">
				<img src="https://avatars0.githubusercontent.com/u/12835712?s=460&v=4" width="128px;" alt="Britton Winterrose"/>
				<br />
				<sub>
					<b>Britton Winterrose</b>
					<p>Machine Learning Developer</p>
				</sub>
			</a>
		</td>
  </tr>
</table>

## Built with

- JavaScript
- React
- Semantic UI 🧡
- Recharts 💙
- Styled Components 💜
- Firebase
- Jest
- Supertest
- React Testing Library 🐐

## Dependencies

- axios: ^0.18.0,
- cors: ^2.8.5,
- dotenv: ^7.0.0,
- express: ^4.16.4,
- firebase: ^5.9.4,
- helmet: ^3.16.0,
- node-sass: ^4.11.0,
- proptypes: ^1.1.0,
- react: ^16.8.5,
- react-dom: ^16.8.5,
- react-router-dom: ^5.0.0,
- react-scripts: 2.1.8,
- react-tabs: ^3.0.0,
- recharts: ^1.5.0,
- semantic-ui-react: ^0.86.0,
- styled-components: ^4.2.0

## Dev Dependencies

- react-testing-library: ^6.1.2,
- supertest: ^4.0.2

## Installation

1. Fork the repository
1. Run _yarn_
1. You need to add environment dependencies to connect to database
1. Run _yarn run-app_ for react app and _yarn start_ for express app
1. Run _yarn test_ for tests
1. Enjoy the app 🙂

## Environment Variables

**Database Enviroment Variables**

- APIKEY
- AUTHDOMAIN
- ID
- PROJECTBUCKET
- PROJECTID
- TESTURL

**For Production**

- NODE_ENV=production

## API

### GET /api/hacker/:hacker

**Overview**

Used to fetch the data from database about the hacker, where :hacker is replaced with the username of hacker.

**Success Outputs**

Javascript object in following format:

```
{
avg_slt_oall: 0.04860141148784049,
avg_slt_s: -0.09191689742938368,
cnt_cmnts_oall: 9964,
cnt_slt_s: 2075,
commentor: "pg",
monthly_plot: {},
rank_lt_amt_slt: 46,
rank_lt_qty_sc: 45,
rank_oall_slt: null,
rank_slt_trolls: null,
sum_slt_oall: 484.2644640648426,
sum_slt_s: -190.72756216597114,
time_cmnt_fst: {},
time_cmnt_lst: {},
top_cmnts_s: {}
}
```

## Contribution guidelines

We are currently working on contribution guidelines. 🙂
