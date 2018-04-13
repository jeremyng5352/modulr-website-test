import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

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
                opacity: 0,
                transform: 'translateY(5%)'
            }),
            animate('650ms ease-in-out', style({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1
            }),
            animate('650ms ease-in-out', style({
                opacity: 0
            }))
        ]),
    ]);

export const containerSlideUpAnimation =
    trigger('containerState', [
        state('top', style({
            transform: 'translateY(-100%)',
            display: 'none',
            opacity: 0
        })),
        state('middle', style({
            transform: 'translateY(0%)'
        })),
        state('bottom', style({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        transition('middle => top', animate('600ms ease-in-out')),
        transition('bottom => middle', animate('600ms ease-in-out')),
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

export const titleStaggerAnimation =
    trigger('titleStaggerAnimation', [
        state('*',
            style({
                color: '#f5f5f5'
            })
        ),
        transition(':enter', [
            query('li', style({
                transform: 'translateY(-100%)',
                opacity: 0,
            })),
            query('li',
                stagger('50ms', [
                    animate('1000ms', style({
                        transform: 'translateX(0)',
                        opacity: 1,
                        color: '#f5f5f5'
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
            animate('650ms 1500ms ease-in-out', style({
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
