export type SubCategory = {
    router: string,
    name: string,
    books: Books[]
}

export type Books = {
    name: string,//书名
    url: string,//封面图片url
    desc: string,//简要描述
    pictures: string[],//详情页面轮播图url
    detail: string,//详细描述
    price: string,//价格
    long: string//长图url
}

export const category: {
    router: string,
    name: string,
    subCategory: SubCategory[]
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
                            name: '大长篇',
                            url: '/47767188.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg',
                                '/47767188.jpg',
                                '/47767190.jpg',
                                '/47767188.jpg',
                                '/47767190.jpg',
                                '/47767188.jpg',
                                '/47767190.jpg',
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/47767303.jpg'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
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
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
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
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
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
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '飘',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '喵喵喵',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '好耶',
                            url: '/47767188.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: 'hello',
                            url: '/47767190.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        },
                        {
                            name: '111',
                            url: '/48130254.jpg',
                            desc: '123123',
                            pictures: [
                                '/47767188.jpg',
                                '/47767190.jpg'
                            ],
                            detail: '这是一个超大超大超大的长篇',
                            price: '$100',
                            long: '/48258322.jpg'
                        }
                    ]
                }
            ]
        }
    ]