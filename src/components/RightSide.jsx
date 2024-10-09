
import iIcon from '/src/assets/iicon.svg';
import box1Img from '/src/assets/box1img.svg';
import box6Img from '/src/assets/box6img.svg';
import box7Img from '/src/assets/box7img.svg';
import rightBottomIcon from '/src/assets/rightbottomicon.svg';

export function RightSide() {
    return (
        <>
            <div className='right-side'>
                <div className="right-side-header">
                    <div className="side-header-left">
                        <p className='side-header-heading'>Beginnen Sie Ihre Verkaufsreise</p>
                        <p className='side-header-subheading'>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
                    </div>
                    <div className="side-header-right">
                        <img src={iIcon} alt="Information icon" />
                        <p className='iicon-text'>Reload</p>
                    </div>
                </div>
                <div className="grid-main-container">
                    <div className="grid-container">
                        <div className="grid-item box1"><img src={box1Img} alt="Box 1" /></div>
                        <div className="grid-item box2"><img src={box6Img} alt="Box 2" /></div>
                        <div className="grid-item box3"><img src={box6Img} alt="Box 3" /></div>
                        <div className="grid-item box4">
                            <h2>Text block</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error?</p>
                        </div>
                        <div className="grid-item video-block box8">
                            <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/915351644/rendition/1080p/file.mp4?loc=external&signature=633b6a76ba79686a8014f09817443ad82e5ef348e4a81467eb9f8610c6410f50" muted loop autoPlay></video>
                            <div className="video-overlay"></div>
                            <button className='video-button'>NESTING</button>
                        </div>
                        <div className="grid-item text-block box7"><img src={box7Img} alt="Text Block" /></div>
                        <div className="grid-item box5"><img src={box7Img} alt="Box 5" /></div>
                        <blockquote className="quote grid-item box6">
                            <h3>"The only limit to our realization of tomorrow is our doubts of today."</h3>
                            <p>Franklin D. Roosevelt</p>
                        </blockquote>
                        <div className="grid-item quote-block box7"><img src={box6Img} alt="Quote Block" /></div>
                    </div>
                </div>
                <div className="right-bottom">
                    <p>Bereitgestellt von</p>
                    <img src={rightBottomIcon} alt="Right Bottom Icon" />
                </div>
            </div>
        </>
    );
}

