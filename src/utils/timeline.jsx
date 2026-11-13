import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { experience } from '../content';

export default function Timeline() {
  return (
    <VerticalTimeline>
      {experience.map(({ title, organization, date, description, education }) => {
        const color = education ? '#e91e63' : '#2196f3';

        return (
          <VerticalTimelineElement
            key={`${title}-${date}`}
            date={date}
            dateClassName="text-dark mx-lg-2"
            contentStyle={education ? undefined : { background: color, color: '#fff' }}
            contentArrowStyle={education ? undefined : { borderRight: `7px solid ${color}` }}
            iconStyle={{ background: color, color: '#fff' }}
            icon={<FontAwesomeIcon size="2x" icon={education ? faGraduationCap : faBriefcase} className={education ? 'timeline-grad-icon' : 'timeline-work-icon'} />}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {organization && <h4 className="h6 mt-1">{organization}</h4>}
            {description && <p>{description}</p>}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
