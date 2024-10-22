import type { NextPage } from "next";
import { Page } from "@App/components/Page";
import { Prose } from "@App/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="This is a brief description about the about page."
      >
        <Prose>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
