import { Link, useLocation } from '@tanstack/react-router'

import type {NavLink} from '@/types'
import {Button} from '@/components/retroui/Button'


interface MenuProps {
    items: Array<NavLink>
    className: string
}


export function Menu({items, className} : MenuProps) {

    const location = useLocation()
    const hompage = location.pathname === '/'
    
    

    return (
    <div className={className}>{items.map((item) => 
     hompage && item.url === '/' ?  null : 
        <Button key={item.id} size={'sm'} asChild>
            <Link to={item.url} className="[&.active]:bg-amber-200">{item.label}</Link>
        </Button>
    
    )}
    </div>
    )
}