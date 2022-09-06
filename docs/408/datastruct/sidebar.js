
module.exports = [
	{
		title: '算法',
		collapsable: true,
		children: [
			'./algorithm/one',
			'./algorithm/two',
			'./algorithm/three',
			{
			  title: "Common Algorithm Summary",
			  collapsable: true,
			  children: [
			    './algorithm/summaryI',
			    './algorithm/summaryII',		
			  ]
		        },
			
			
		]
	},
	
	{
		title: '数据结构',
		collapsable: true,
		children: [
			'./basic/algorithm',
			'./basic/struct',
		]
	},
	
	{
		title: '数据库',
		collapsable: true,
		children: [
		    {
			title: "系统概论",
			collapsable: false,
			children: [
			    './database/relation',
			    './database/sql',
			    './database/design',			
			]
		    },
		    {
			title: "应用",
			collapsable: false,
			children: [
			    './database/mysql',
			    './database/redis',			
			]			
		    }
		]
	},
	
	
]
