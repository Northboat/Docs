module.exports = [
	{
		title: 'Python3',
		collapsable: true,
		children: [
		    './basic/build',
		    {
			title: "Python Hundred",
		                collapsable: true,
			children: [
		                    './basic/one',
		                    './basic/nine',
			    './basic/seventeen',		
			]
		    },
		]
	},

	{
		title: '小玩具',
		collapsable: true,
		children: [
			'./toy/well',
			'./toy/gridworld',
			'./toy/mousecat',
		]
	},

	{
		title: '数据科学库',
		collapsable: true,
		children: [
			'./lib/numpy',
			'./lib/pandas',
			'./lib/scipy',
			'./lib/visual',
		]
	},


]
