import React from 'react'

const withClass = props => (
<div className={props.classes}>
    {props.children}
</div>
);

export const withClassOtherHoc = (WrappedComponent, className) => {
    return props =>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};


export default withClass;