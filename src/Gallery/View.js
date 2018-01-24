import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Image from './Image';
import Loading from './Loading';
import Error from './Error';
const View = ({
  loading,
  error,
  data,
  initialQuery,
  onLoad,
  RenderSearchInput,
  RenderImage,
  RenderLoading,
  RenderError,
}) => (
  <div>
    <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad} />
    <section>
      {loading && <RenderLoading />}

      {error && <RenderError error={error} />}

      {data && <RenderImage src={data} />}

      {/*{*/}
      {/*do {*/}
      {/*if (loading) {*/}
      {/*<RenderLoading />;*/}
      {/*} else if (error) {*/}
      {/*<RenderError error={error} />;*/}
      {/*} else {*/}
      {/*<RenderImage src={data} />;*/}
      {/*}*/}
      {/*}*/}
      {/*}*/}
    </section>
  </div>
);
View.propTypes = {};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderImage: Image,
  RenderLoading: Loading,
  RenderError: Error,
};

export default View;
