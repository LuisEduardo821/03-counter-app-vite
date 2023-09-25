import PropTypes from "prop-types";

const getResult = (a, b) => {
    return a + b;
}

const getSaludo = () => {
    return `Hola ${names.first} ${names.second}`;
};

const names = {
    first: 'Luis',
    second: 'Eduardo',
};

const newMessage = {
    message: 'Hola Mundo',
    title: 'Luis Eduardo',
};

export const FirstApp = ({ title, subTitle, name }) => {

    // if (!title) {
    //     throw Error('El title no existe');
    // }

    return (
        <>
            {/* <code> {JSON.stringify(newMessage)} </code> */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Luis Eduardo',
    subTitle: 'no hay subtitulo',
    title: 'no hay titulo',
}
