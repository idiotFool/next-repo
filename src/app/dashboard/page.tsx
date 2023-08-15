import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'dashboard page'
}

export default function Page() { 
    throw new Error('糟糕， 我的脑子被偷走了')
    return <div>这是dashboard路由对应的UI页面</div>
}