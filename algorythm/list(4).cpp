#include<iostream>
#include<list>
using namespace std;
class Node{
    public:
    int m_val;
    Node* m_next = nullptr;
    Node* m_prev = nullptr;
};
class List{
    public:
    Node* head = nullptr;
    Node* tail = nullptr;
    void size();
    void pushfront(int );
    void pushback(int );
    void popfront();
    void popback();
    Node* find(int index);
    void insert(int , int);
    void clear();
    void print();
};
    void list::size(){
        if(head == tail == nullptr){
            cout<<"List is empty";
        }
        else if(head == tail){
            cout<<"1";
        }
        else{
            for(int it = list::begin(); it < list::end(); it ++){
                cout<<it;
            }
        }
    }
    void list::push_front(int value){
        if(head == nullptr){
            head = new Node();
            head -> m_val = value;
        }
        else{
            Node* temp;
            temp =  new Node();
            temp -> m_val = value;
            temp -> m_next = head;
            head = temp;
        }
    }
    void list::push_back(int value){
        if(tail == nullptr){
            tail = new Node();
            tail -> m_val = value;
        }
        else(){
            Node* temp;
            temp = new Node;
            temp -> m_val = value;
            temp -> m_prev = tail;
            temp = tail;
        }
    }
    void list::pop_front();
        if(tail == head == nullptr){
            cout<<"List is empty\n";
        }
        else if(head){
            delete(head);
            head = nullptr;
            tail = nullptr;
        }
        else{
            Node* temp;
            temp = head -> m_next;
            delete(head);
            temp -> m_prev = nullptr;
            head = temp;
        }
    void list::pop_back(){
        if(tail == head == nullptr){
            cout<<"List is empty\n";
        }
        else if(tail){
            delete tail;
            head = nullptr;
            tail = nullptr;
        }
        else(){
            Node* temp;
            tail -> m_prev = temp;
            delete(tail);
            temp -> m_next = nullptr;
            tail = temp
        }
    }
    void list::clear(){
        if(head == tail == nullptr){
            cout<<" ";
        }
        else{
            Node* temp;
            while(head != tail){
                temp = last -> m_prev;
                delete last;
                last = temp;
            }
            delete head;
            head = nullptr;
            last = nullptr;
        }
    }
    void list::find(int index){
       Node* temp;
       temp = head;
       for(int it = 0; it < index; it ++){
            temp = temp -> m_next;
       }
       cout<<temp;
    }
    void list::insert(int index, int value){
        if(index ==1){
            pushfront(value);
       }
       else{
           Node* temp_next = list:: find(index - 1);
           Node* temp_prev = list:: find(index);
           Node* temp;
           temp = new Node;
           temp -> m_next = temp_next;
           temp -> m_prev = temp_prev;
       }
    }
    void list::print(){
    Node* temp = head;
        for(int it = 0; it < list::end(); it ++){
            cout << temp -> m_val<< " ";
            temp = temp -> m_next;
        }
    cout<<end()l;
    }
int main(){
list<int> my_list = {4, 25, 34, 72};
my_list.size;
my_list.push_front(9);
my_list.push_back(21);
my_list.pop_front();
my_list.pop_back();
my_list.find(2);
my_list.insert(3, 27);
my_list.print;
}
