
module.exports = [
	
	{
		title: '操作系统',
		collapsable: true,
		children: [
			'./basic/outline',
			{
			    title: '进程管理',
			    collapsable: true,
			    children: [
			    	'./basic/thread',
				'./basic/scheduling',
					'./basic/synchronized',
			    ]
			},
		]
	},

	{
		title: '汇编语言',
		collapsable: true,
		children: [
			'./assembly/addressing',
			{
			    title: '汇编程序设计',
			    collapsable: true,
			    children: [
				'./assembly/branch',
				'./assembly/loop',
			    ]
			},
		]
	},
	
	{
		title: '编译原理',
		collapsable: true,
		children: [
			'./compilation/lexical',
		]
	},
	
]
