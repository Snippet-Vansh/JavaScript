class Node{
    int data;
    Node.next;
    Node(int data){
        this.data =data;
        this.next = null;
    }
}
class linkedlist{
    Node head;
    void insert(int data){
        Node newNode = new Node(data);
        if(head==null)
            head = newNode;
        return;
    }
    temp.next = newNode;
}
void print(){
    Node temp = head;
    while(temp!= null){
        console.log(temp.data);
        temp =temp.next;
    }
}

void main()
{
    
}