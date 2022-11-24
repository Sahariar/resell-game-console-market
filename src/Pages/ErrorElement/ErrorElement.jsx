import React from 'react';
import TitleArea from '../../component/Shared/TitleArea';
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <section>
            <TitleArea>Oops Error! </TitleArea>
            <div className="container mx-auto">
            <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
            </div>
     
        </section>
    );
};

export default ErrorElement;