import React from "react";
import CardView from "react-native-cardview";

const AppCardView = ({ cardElevation, children, style, cornerRadius }) => {
  return <CardView
    style={style}
    cardElevation={cardElevation}
    cardMaxElevation={10}
    cornerRadius={cornerRadius}>
    {children}
  </CardView>;
};
export default AppCardView;
