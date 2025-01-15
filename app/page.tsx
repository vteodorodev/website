import avatar from '@/public/20230718_085228.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="author">
        <h1 className="author__heading">Hi, I'm Vasco!</h1>
        <p className="author__body">Mobile & Web Developer</p>
      </div>
      <Image
        src={avatar}
        alt="photo of me smiling at a camera"
        className="hero-image"
        width={300}
        height={300}
        priority
        loading="eager"
      />
      <div className="intro-text">Learn more about me and my work</div>
    </>
  );
}
