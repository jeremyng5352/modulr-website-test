import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
    trigger('slideInAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('0.3s')
        ]),
        transition(':leave', [
            animate('0.8s', style({
                opacity: 0,
                transform: 'translateY(200%)'
            }))
        ])
    ]);

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition(':enter', [
            style({
                display: 'none',
                opacity: 0,
            }),
            animate('650ms ease-in-out', style({
                opacity: 1,
                display: 'flex'
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1,
                display: 'flex'
            }),
            animate('650ms ease-in-out', style({
                display: 'none',
                opacity: 0,
            }))
        ]),
    ]);

export const menuStaggerAnimation =
    trigger('menuStaggerAnimation', [
        transition(':enter', [
            query('nav', style({
                transform: 'translateX(10%)',
                opacity: 0
            })),
            query('nav',
                stagger('50ms', [
                    animate('300ms', style({
                        transform: 'translateX(0)',
                        opacity: 1
                    }))
                ]))
        ]),
        transition(':leave', [
            query('nav', style({
                transform: 'translateX(0%)',
                opacity: 1
            })),
            query('nav',
                stagger('50ms', [
                    animate('300ms', style({
                        transform: 'translateX(10%)',
                        opacity: 0
                    }))
                ]))
        ])
    ]);


export const titleHighlightAnimation =
    trigger('titleHighlightAnimation', [
        state('void',
            style({
                color: '#f5f5f5'
            })
        ),
        state('*',
            style({
                color: '#69C7C2'
            })
        ),
        transition(':enter', [
            animate('650ms 1000ms ease-in-out', style({
                opacity: 1,
                color: '#69C7C2',
            })),
            style({
                opacity: 0,
            }),
        ]),
    ]);

export const enquiryPageAnimation =
    trigger('enquiryPageAnimation', [
        state('*',
            style({
                position: 'relative',
                top: 0,
                right: 0,
                bottom: 0,
                opacity: 1
            })
        ),
        transition(':enter', [
            style({
                transform: 'translateX(100%)'
            }),
            animate('650ms ease-in-out', style({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            }),
            animate('650ms ease-in-out', style({
                transform: 'translateX(100%)'
            }))
        ]),
    ]);


export const newsletterSlideInAnimation =
    trigger('newsletterSlideInAnimation', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('650ms ease-in-out', style({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1,
                transform: 'translateY(0%)'
            }),
            animate('650ms ease-in-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ]),
    ]);

export const contentLeftSlideAnimation =
    trigger('contentLeftSlideAnimation', [
        state('*',
            style({
                display: 'none'
            })
        ),
        transition(':enter', [
            style({
                transform: 'translateY(-100%)'
            }),
            animate('1500ms ease-in', style({
                transform: 'translateY(100%)'
            }))
        ]),
    ]);


export const contentRightSlideAnimation =
    trigger('contentRightSlideAnimation', [
        state('*',
            style({
                display: 'none'
            })
        ),
        transition(':enter', [
            style({
                transform: 'translateY(100%)'
            }),
            animate('1500ms ease-in', style({
                transform: 'translateY(-100%)'
            }))
        ]),
    ]);

export const nextPagePromptAnimation =
    trigger('nextPagePromptAnimation', [
        state('shrink', style({
            height: '30vh'
        })),
        state('expand', style({
            height: '40vh'
        })),
        transition('shrink <=> expand', animate('600ms ease-in-out')),
    ]);

export const mainPageAnimation =
    trigger('mainPageAnimation', [
        state('*',
            style({
                display: 'none'
            })
        ),
        transition(':enter', [
            animate('1.2s ease-in-out', keyframes([
                style({ transform: 'translateX(-100%)' }),
                style({ transform: 'translateX(0%)' }),
                style({ transform: 'translateX(-100%)' }),
            ]))
        ]),
    ]);

