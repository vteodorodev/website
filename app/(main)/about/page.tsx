export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <section className="about-section slide-fade-right">
        <h2>Who are you?</h2>
        <p>
          Hey! My name is Vasco and I'm a mobile and web developer from
          Portugal! My background is in Biomedical Engineering, with a focus on
          signal processing and machine learning.
        </p>
      </section>
      <section className="about-section slide-fade-right delay-6">
        <h2>How did you get into frontend development?</h2>
        <p>
          After I graduated, I started doing research on the topic of clinical
          depression, developing tools to assist in the diagnosis and monitoring
          of this condition.
        </p>
        <p>
          In cooperation with my then supervisors, I developed my first mobile
          app, made with Flutter and a Firebase backend, that served as a mental
          health diary. Users were offered a set of mental health surveys, such
          as the{' '}
          <a href="https://en.wikipedia.org/wiki/PHQ-9">
            Patient Health Questionnaire (PHQ)
          </a>
          , whose results could be viewed using a web platform developed by
          another colleague.
        </p>
        <p>
          Later on, I shifted my focus towards recording movement data from the
          same population, and so I built an instrumented device with an IMU
          sensor and attached it to a regular pen. The device would then
          transmit data via bluetooth to an application made for Android, which
          would then send it to the same firebase backend.
        </p>
        <p>
          With this new toolkit in my bag, I decided to keep working as a
          frontend developer after leaving academia, learning both React Native
          and ReactJS, alongside similar framrworks.
        </p>
      </section>
      <section className="about-section slide-fade-right delay-12">
        <h2>Do you code in any other languages or frameworks?</h2>
        <p>
          Besides Javascript, Dart and Java, which I've used for frontend
          development, I also know Python and Swift.
        </p>
        <p>
          I'm also getting more into node backend development and databases, so
          I can potentially do fullstack development if the need arises
        </p>
      </section>
      <section className="about-section slide-fade-right delay-18">
        <h2>What else do you like to do?</h2>
        <p>
          At the risk of sounding derivative, I enjoy working out at the gym and
          gaming; I both activities incredibly relaxing. In the past, I used to
          do a lot of gardening, but regretably, I don't have much time
          nowadays. Still, I make sure my plants are well watered and happy!
        </p>
      </section>
    </>
  );
}
