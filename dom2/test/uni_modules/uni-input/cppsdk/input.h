#ifndef INPUT_H
#define INPUT_H

class InputCpp {
public:
	UniSharedDataComponent* _sharedData = nullptr;
	UniElement* element = nullptr;
	UniScrollViewElement* currentScrollParentElement = nullptr;
	
	void keyboardHeightChange(int height) {
		UNIAPPX_HX_LOG_INFO("Keyboard height changed to: ", height);
	}
	
	void initElement(UniElement* el){
		element = el;
		UNIAPPX_HX_LOG_INFO("element: ", element);
		currentScrollParentElement = element->closestVerticalScrollElement().value_or(nullptr);
    UNIAPPX_HX_LOG_INFO("currentScrollParentElement: ", currentScrollParentElement);
	}
	
	std::optional<UniScrollViewElement*> getNextScrollParentElement(){
		if(currentScrollParentElement){
			currentScrollParentElement = currentScrollParentElement->closestVerticalScrollElement().value_or(nullptr);
		}
		return currentScrollParentElement;
	}
};

#endif
