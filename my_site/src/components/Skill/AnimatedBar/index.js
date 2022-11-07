import './index.scss';

const AnimatedBar = ({ name, percent, color }) => {
    return (
    <>
        <dt class="skill-name">{name}</dt>
        <dd  class="inner skill-percent-html" data-percent={percent + "%"}></dd>
        {/* <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span> */}
    </>
    )
}

export default AnimatedBar;