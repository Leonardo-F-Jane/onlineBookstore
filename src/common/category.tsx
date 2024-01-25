export type subCategory = {
    router: string,
    name: string,
    books: books[]
}

export type books = {
    name: string,
    url: string
    desc: string
}

export const category: {
    router: string,
    name: string,
    subCategory: subCategory[]
}[] = [
        {
            router: 'love',
            name: '爱情',
            subCategory: [
                {
                    router: 'long',
                    name: '长篇',
                    books: [
                        {
                            name: '呼啸山庄',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123'
                        }
                    ]
                },
                {
                    router: 'short',
                    name: '短篇',
                    books: [
                        {
                            name: '段短短',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123'
                        }
                    ]
                }
            ]
        },
        {
            router: 'cartoon',
            name: '卡通',
            subCategory: [
                {
                    router: 'kid',
                    name: '少年',
                    books: [
                        {
                            name: '呼啸山庄',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123'
                        }
                    ]
                },
                {
                    router: 'teen',
                    name: '青年',
                    books: [
                        {
                            name: '呼啸山庄',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123'
                        }
                    ]
                }
            ]
        }
    ]