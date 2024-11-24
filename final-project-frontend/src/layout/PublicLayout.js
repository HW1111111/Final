import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const PublicLayout = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        id: ''
    })

    useEffect(() => {
        const userStr = localStorage.getItem('token')
        if (!userStr) {
            navigate({pathname: '/auth/signIn'})
        } else {
            console.log('user', userStr)
            const userData = JSON.parse(userStr)
            setUser(userData)
        }
    }, [])
    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate({pathname: '/auth/signIn'})
    }

    return <div className="flex flex-col h-screen">
        <div className="flex h-16 items-center px-4">
            <div className={'flex'} onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
                <span className="text-lg font-semibold">Blog</span>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                {/*    3 tabs, create post, profile, sign out*/}
                <button onClick={() => navigate('/createPost')}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Create Post
                </button>
                <button onClick={handleSignOut} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Sign
                    Out
                </button>

                <div className="flex items-center space-x-2" onClick={() => navigate(`/profile/${user._id}`)}>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX9xAAAAAD////0cwD9pwD/zAD/xwD/ygD/zQD7nADzcADMngD7+/v09PTe3t7Ly8uZmZm4uLj0vQDrtgBDQ0PBwcH9dwDW1takpKTo6Oj/rQCsrKwfHx/v7++thgDWpgBVQgCEZgArKys1NTWQkJBWVlY6LQCifQCXdQB8YACLbABMOwAWEQDvuQB5eXliYmJjTQC9kwDSowAsIgBubm4bGxuGhoYQEBA7OztnUAAlHAByWABENQBhYWFNTU23jgDbkQCvcwCOQwCsUQB0NwDWZQAqIQARDQCYZADKhQB7UQBaOwA6JgDunQDRgQA9GABVKADAWwAcDQAqFADQnYp6AAAL8ElEQVR4nO2deXeiSBeHpV8pnFZxjzHGGI2JZjMxi3bidDI909P7rO/3/y4DKFDArSooqkA9POfkjwgW9bOWe+vWQi6XkZGRkZGRkZGRkZGRkZGRkZGxmyCkaSjtTMgDqVpjNnka76hEpOZmS8XgVks7K3JQG+eKxf1uliCqr/UpSmMnFapFW58yUdPOjAzUsSNQ2c0SxASOd7Gb0WauQKW++gxpqqoaf7thG+uYwEurFWpqf/x0f3X16XbSV7e/UNUnTOHE0KPlxs/uJ5/HuS3XiBqYQOUVITRRfBxtd/eqnuNiZoXilV+gopzV085lLLzFdRHUdzW+TjuPcUDFoCRfHUXb3Q61QKvzstz2fianHlMFzgppZzA2BarAxrYXoAGiCtx+jwZpdYrAu4LhtW2vSGS4nvW7oyWtDJ9vB0f9uqpun0yEVNQ/Wj7T1GE6l+N+bpt8cKPsGkdPbGFejsf97QjCGfL6k7Oo8tYsZzl1w0UitTEJWTUJPM3Q5pakkbXXy1jyVgz6hY3UaBQf4FTzcfa6ea4qKvQj9y1UJpvlriK1T/c+ebiob45GtXErXJ/JppSjVj9nZ5aT8QY4O0gbszPKz3Mx7RCO2r+XKdDgKdXmiHIDyfpMUozEqX0gbCaB45SKEanCLDyTWRrFiOo/JybQ8OSSd1ZVZpBQLGf1hCUWpNoIkH6ijVGjxiYkkWBjRDkRg6TojJOKraK6bCtP4iIZieg6GSsIMUiioqLr1PQZnMsvxXQFJlCKqP45XYXKRG4poly8SJoI5DriGikS+jJqtTvlsl7pThcxcr+Ydit6udxpt0ZN4k1FiaZfhaMVzVrpDYY+4tQ30vFkSjWSSHkzVgVwMNFsvwmwz6FvP5hMG9Z4JUug9go9rhbMmFkADxH1PZTAdGrgzcdymqJ3XcyaZtmtnNX3w8Xi5KHbsf5tRRLYWidxYyWx33FSLYPFKGl9I+DKPLg/9tD99KViZTeCQB1OwgKsDX0JTVEFYtqOQH3ovXBqFm0vtMAeKQmiRAlNEWqEp3YeusFrZvfTCSmwQ07C4hT4jnD3DXLWHu0cVKFsV0K3xRYtCYtH4GJRcD0tACNC23rB/Z11eRpC4BQuQfwJUJO+EqtQOwo+Yr5+PFQXh1293TUvhlBodpjG7WAp2oU4B65dCO1PoSUj9tNPgpemTkdIKByMrn1rCbALdkIl6JsiXZsCEJapkuvoyxsXpkL6vbZhhBzBW3GFiPpA+r31s4fBS7gbB1Y+jCp2L+Dr2fYItDx3wgpRBUYUtqVoA0/GMs20GB3sXqhDsZ05yGL8LKoQEeSP2s0H6gNwhVAzxXiH3woVlO32gg1alMXQoMhThyKgjGebPpQa4bdWgBvsvgasC2diChGyFG45QdeccZBpy+lW37ij5Bh2yD17R3uQoEJEUGTmhfbT2r1QRyE0Lhd9fRepCN2f8gW6eCnCd0NgEdp9HNTRKOvBUGtlzakKy+ZPMLR8F8KomVbAYsYYGhh7mtMVKocPD4/r7FEVrpM4md5Q7rCAujRFWcZviWgGpjxiKMSyx7qBMY5k9FjxN2qo8CSMXYb0MeBjGIX0JBb0Moy/FQ4MXSjY2JeavVOmgB4rCccDJAR+PsWtptoATrhJ7eJsqmH6UtBdcXAMJim0GLuvIT3ZfjA1bmg6qITR45pamCSolWUQr5oS+hnFHZzS/M5HoP188f47Z9VjWyC5KsRTSAhyK5jf8p6cO+se79jj64FX4pCRhDP0IBd0vBEGebPEC/vHVYKXPxzkD755PtHZSTDa+0WcQgRHFWucYQ8xFlMLVNIvB/l8/uA7/tGInQSjMTzHUUiupK5FhCNhBjeBDuKbKdCQ+AP/0LrrEE7ivfMMgjW0iBXNoKTrjpHg3/fEuoYP8b+vBBrgw7EqOYmhI5Dq3B7xK6RvjnQj+lA7Oin5c/Yj7/AHfmeZJHHoTtZQ53lixGtI5n6NO7XQCwRrVlUUN+ZXeYxfsFtX8ZBeYCjtVlHCuMqBvyEWGFPa2FjeF3CqBbv4P3CFB1+xK/u0JJh1VInj1rCWXZy8wXJRdTqcd3YMB//pf8l7OPiAXavYSRwGkrCgh3piNESyQ2ODB0aNtlSrjkbVlh1m9Iysvh7kfRJxy98mJWFBdX1NlrzVlNEMTZrwzG2gBD/4Bea9lr9CTgYKhfu45+1qoDCpn4VOyhnerL4EBfosf5WUjB5maQf3MDhE2qS8dfBf/hsk0AC3/M0OmE64ZR2cXQ0YywdYBNcq9Dxu2HeCwHzeE8Wb9gLp1EKuzeHsamhOqQ/PQphSyxtV+kHS57P8hhFt4c06wrIcTudbi7IUf/FQrVXa7VZ3Huj5fqLwp//ml3m31W5XatVIq1U4vRqa2x2Fj3tvifwl5hFXfIHhgqhViL/u/Q9m729BT+A9XUvU45XfYIl7H4U9gWsARYoj8vAPJHHvV3EP4DIX6E5cBpTfgxL3fhOY/oxLIdMrjcLbgMB/RCbPZRDhOSde/vUL/F1k6tYJYpGJZA7Z/OVV+FZo4nxh4RAji0j87WmK/4pN/JxLoeitTR9diXuCLL0Dl1PDON+JA8fyi7P0NlyLhgkTh3FYW36Blt6Ga2WNKmGLqGX5RVp6G65lJ2FG+JExLL9QS2+zOQqVt2Itvc0GKfy/WEtvs0EKJZEphBUmud0+LruvkM8eprNfm4/LzfDaJMLntYk92UouXJ63Ju9sJPFwzT6JHh9KhW8EzDj/l4fF4XA4PIyzUZgAV1gfCTu95PBmtG/ug3YnJUrmXub90Q1hkUl0uOI0ESZmyDTnNeIE42r6pTZnz4Cy4Yu1xT1i52RUocwQ45NVlRFrpp4FX7w05PQhzGk3OBtIo9elrjJlwbcrgT+qP+yW2ZoClLv8Jcm38It6TDWFKb3l0dDD7MiE4DuXn292bcRTfFhB8p3HwDcHzOOYVsP1LTRKrP18AM98c8DR3bZpfH2Wxsh1lXOWO+qhlk3+9udHj2gjOVezRzSIXXbGI8DeP4zD+aa6SJPAzWjmj00vSjFyb9IL/4gRO8uRidCr8q6DDh+poSy8iwFj3SwGZwmGniNdwEvS4tMJOc7i3vEccib/RIyNgCiF8+O4NwaF62qa7IzGIFR/88q9Cpr+ipgkBIaTyL/hIoRXM5QsEDyzwQ//ducQw/x4fnYYWAv14+0Fpr0Fx0JWL4rDPKkoxp4ZZmQfPslMNKyTiuLse2Ksi5qycycE+liDe6W+BXVPySM7b4KgRh25IokO1FEwcJqgJKi7/uNtdaa5NUnVURNKPeUc37sSyUnLc9aCgOdErYh75AB59gI4qlIi5I3OsV9/STSJiQokb8d/in30hzrYhCIkF6KA41sIhZiwQFIhijgMC36LxZydJcHAu7nFHKMEpZyEQ+oFdE+51mAEgGziO3aOhPMOUCjooNZCcANU0v2MCdDXnIs6ki7Y2SRfScFqKkgfsH3mMAWBwGhf4CGtqm8KI0mX1MXfmwp9iYD3/egJjXz9+E4rOhN7+Lx3u2UazdDfED+LfnmQhi9zS0Wgz60Rf7g+VlFlx0hJ4BZRypHlTnczlDMTw+RBZglaEt0p06HY+dBwlJ0lN/fXkt7/gOpYfzNNuCDbbgkuJb7ZUvX4qNOa6JlfEnoVC7e9Sn0NC8p5wxqH064uOWDTqXniULfSX4ao1QMDxuHNqFvRxZdnr10bBZa7iTvimqIxN/7kf+6Kk9Ob6bxa3e/Waq1KkNaa9b/tdlvX9U6n0+v1yia9TkdvtyuV2n51/nBKOCRN9BsDCBq1/gB+vnySUWi+JFe7u0hl31BSCi2Rar14kfiujAQVrlVqjeJ4cJzc+wITVmipNGqsqqF6/+71aDxYPt1ent0/xzoX5er+eHk+OSoONkShq9TUaqhdUSgYspHzYWGFdWF1KZerG1xfXzccjH/qOWR+2/gKQmoDaAMpKpQAUouB6r9bCs2G7p+G3jWFpn9xseMKDXe/cbvjCnOo0D/bbYVml/O64wpNWzTZcYXmsG254wqNLqd/ueMKTQ9gxxWaUZTYay8yMjIyMjIyMjIyMjIyMjIyMjIyuPgPWy0e5TxHhJwAAAAASUVORK5CYII="
                        alt="avatar" className="w-8 h-8 rounded-full"/>
                    <span className="text-sm font-medium">{user.username}</span>
                </div>
            </div>
        </div>
        <div className="flex-1 overflow-y-auto">
            <Outlet/>
        </div>
    </div>
}
