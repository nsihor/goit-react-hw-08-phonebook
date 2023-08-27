import PropTypes from 'prop-types'; 
import { SectionContainer } from "./section.styled";

export const Section = ({title, children}) =>             
<SectionContainer>
    <h2>{title}</h2>
    {children}
</SectionContainer>;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}