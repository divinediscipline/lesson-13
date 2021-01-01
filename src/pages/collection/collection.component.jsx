import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection, match}) => {
  const { title, items } = collection;
  console.log(88449, collection)
  console.log(5555, match)
 return ( <div className="collection-page">
    <h2 className='title'> {title}</h2>
    <div className="items">
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))
      }
    </div>
  </div>)
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // we're using currying here
})

export default connect(mapStateToProps)(CollectionPage);

// if you look at the selectors file for selectCollection you will see that 
// [selectCollections] is called and sees that it needs to call [selectShop]. [selectShop] takes a parameter "state" which was passed as a second argument from our  mapStateToProps.
// Also because the resulut of ownProps.match.params.collectionId i.e our collectionUrlParam in the selector file is dynamic, it can be hats now or jackets later etc, the selectCollection selector is not really memoized. To memoize use lodash.memoize function. See the course content for details.