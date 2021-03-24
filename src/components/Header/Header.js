import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-wrapper">
            <Link
                to="/"
            >
                <img
                    className="instagram"
                    src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
                    alt="logo of instagram"
                    width="25%"
                />
            </Link>
            <img
                className="post"
                src="https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png"
                alt="logo of new post"
                width="25%"
            />
            <img
                className="heart"
                src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"
                alt="logo of heart"
                width="25%"
            />
            <img
                className="send"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEX///8AAAAvLy/s7OwSEhLPz8/6+voFBQUJCQn29vb5+fnz8/Pa2tpxcXHj4+NQUFAlJSWmpqaCgoI1NTWfn59HR0cbGxuxsbEeHh7i4uJmZmaVlZV6enqMjIwVFRW6urpXV1c6OjpCQkLDw8OHh4dpaWleXl7U1NQyMjLIyMi1tbVSVx9OAAAGfklEQVR4nO2c61bqMBCFU1FAkatc5KICchHe/wHP0UywTTJJCjaTrjXfnyO0cmZLm+7ZHRCCYRiGYRiGYRiGYRiGYRiGYRiGYarg2B3c7ZrUVdxKc7jNvtk+UVdyE73RNAO61LXcwEe/lV34oq7mWhpvgyxPTd+Rh0W7ICNr9ahLuoKn8Uum06cuqjzP3XtDRpZ9UJdVltnEoiLLBtR1laOxe7XKyLI36tLK8LluITKydoO6uGA6yztMxX8O1OWFctzbTvBfHqgLDELZqRyv68LDF+oSQ+itprqMyflUfIPG1EX6KdipH+67z+KhqOP+kbpMD7qd+j6Ixv+L1nSkbrMMO5W1Fz8nta4je6Yu1cGjaacGb/JiYeiYENfqwLRTrb4yU7867mAVmJHW6sC0U++ri0nP6ZjJf1/TbNctdmo7/C01p6MB15IRYbUopp263x9z2/M6GnLXVno2y2Kn7pad/B55HWInf1rTFItz3OurbWv9WdyloEPAIfhpfzkibHZqpx8zRR1n+JGkXoT56l2XMZkZa1FRh4ClbUlQL4LdThloOuby53bH3JMEzE4ZaDrESj7YR64X4eFg2KnDyb6npuMJDsajde+4OOyUga5DDOWjTcR6EVx2ysDQITby4TBWuQhNm52ao7ubOh7gl2htVmNk2KnN0HF7w9QhFvLxKkq9CKadau+dp6xFR0euES38Tawav50ysOgQS/kEWXAdYKcMbDoEXHtoguvmcKO/GdOR96aGVcenfIYkuA6zUwZWHQI6KoLgOtBOGdh19OSLRQ+uLXbqy2qnDOw6xEg+Fzm4PgXbKQNERxPCk8BX+RPK2CkDRIeA8CRicG252dc/B/82pkNALxkruC5ppwxQHc+wWsQJrnsl7ZQBqkN05dNRgmuLnVqUu6eE63iELdUH1xY7NfDYKQNchxjL5ysPrm12qrQlcugQsAxWG1w/XWWnDFw6TnJDpcG1xU5tA+yUgUuHOMgtFQbX5yvtlIFTRwM6qqpsVmN0rZ0ycOoQb3LT+qZqcTq6jFaonTJw61AdVVXB9awow4yfg/Ho+IBtN9TqZJmXMQm3UwYeHaIvN1YWXJ/+SIhPh+qoqguu+4VDa/B23f/k0xEhuNaDBU9SZceroxkluNaD9dLXQq+OaMG1fmO53OLl16E6qgjBdXNWvBNY4nISoOMot7/HGYLX3e/LOOj/DdAh9nKHaMF1R0t/cuMXKCE6OnKfqMH1udiuO+7gSEJ0EAXXeoDijNyDdAjoO6MH149ax4ub+jAdlMH1p9ai2M1LmA7VURFNXPe0ptESMwbqaBAF1xf0T0jouVCgDjUKRDpxfToUj7ANMkfmfBEwDTGDawuNUXEGeTpSd5lDdcAoEP3EtT7G1Fp//22DdahRoCQmrvUx3q/xKVgHjAKlMnFtuXUVpkN1VAlNXJ9tHyzy6lCjQElNXJt3f7w6VEe1jVFfCTrLQTkdYiP3THDi+qNfRgeMAk2TnLier+AIW/j3hVGgJCeuxeXv7HdPahQo2c+wwpHv9bPQUa2rr+hKYC3ydhjQ16Q1cZ1H5W2eiBU6qqQmrjVgpsRzXxNGgRKauDaATNp9wa4+uP4D1gEWahS8ShMCh7/L1KpRoMQ/w/olq3S0GXAzLIGJaydj74oEbpl64tqHGixBrxEwChQpuL6BrueqDdtJJ66DgB4W81HqHaObuA6m73S2cA7V4atC4M458rGDlyATkwYDx7J0CrSVSbB0XChog+uSQNtku3TDKFBdvipkj5opGAWqy1eFwDXP8neH04c4uA5ngpwJsKDV5wvA1Ofr9ef7XkeZGnDvQ8vfoKNKJbgOAU5qreVNL7j2AstsseVVHVVSwbWPheWPn2hw7QZCx/t8wLC1njips5FV5yIfGAVKM7jGgeMo1/LunfY+WdSZfRk0UaNAyQbXGJBeXTqo5INrDPVlLaqnTT64RoHQEVKGGgTXGNAMQu5zMFax+pAPHRt1CK4xIDD5mTaBUaC0g2uMR7jt891GgR1OPLjGALd7uIwCpR5cY8wvX5dVk+AaBTrC3bywgNUQ6NFfaxNco8DlHO4s1iC4xih+wom6mhvo5AegahFcY3R/ddQjuMZ4/hWyo67lNi6DgnUJrjHOSkhdgmsUNSRYm+AaA0LH+gTXGBA61ii4xvhZgac1P9W/aXYH7UkK31nIMAzDMAzDMAzDMAzDMAzDMAzDMH/OP3ioS5O/872RAAAAAElFTkSuQmCC"
                alt="logo of send"
                width="25%"
            />       
        </div>
    )
}
