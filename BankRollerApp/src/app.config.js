/*
 * App settings
 * for dev and production builds
 */
const config = {
	'dev': {
		api_url: 'https://platform.dao.casino/api/',

		wallet_pass:'1234',

		HttpProviders:{
			infura:{
				active:true,
				url:'https://ropsten.infura.io/JCnK5ifEPH9qcQkX0Ahl',
			}
		},

		confirm_timeout:5000,

		contracts:{
			// Coins contract
			erc20:{
				address:'0x95a48dca999c89e4e284930d9b9af973a7481287',

				// balanceOf method address
				balanceOf:'0x70a08231',
			},

			abi:{
				dice:[{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"getStateByAddress","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"addr_erc20","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBank","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalEthPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"games","outputs":[{"name":"player","type":"address"},{"name":"bet","type":"uint256"},{"name":"chance","type":"uint256"},{"name":"seed","type":"bytes32"},{"name":"state","type":"uint8"},{"name":"rnd","type":"uint256"},{"name":"block","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"random_id","type":"bytes32"}],"name":"timeout","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"totalRollsByUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ownerStoped","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"listGames","outputs":[{"name":"player","type":"address"},{"name":"bet","type":"uint256"},{"name":"chance","type":"uint256"},{"name":"seed","type":"bytes32"},{"name":"state","type":"uint8"},{"name":"rnd","type":"uint256"},{"name":"block","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"random_id","type":"bytes32"}],"name":"getStateById","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"random_id","type":"bytes32"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"confirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Stop","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"getShowRnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"usedRandom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"countRolls","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"adr","type":"address"}],"name":"setAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalEthSended","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"PlayerBet","type":"uint256"},{"name":"PlayerNumber","type":"uint256"},{"name":"seed","type":"bytes32"}],"name":"roll","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"time","type":"uint256"},{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"bet","type":"uint256"},{"indexed":false,"name":"chance","type":"uint256"},{"indexed":false,"name":"seed","type":"uint96"},{"indexed":false,"name":"rnd","type":"uint256"}],"name":"logGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"Id","type":"bytes32"}],"name":"logId","type":"event"}],
			}
		},
	}
}

module.exports = config['dev']
