#include <climits>
#include<iostream>
using namespace std;
int min_dist(int distance[], bool Tset[]){
    int min=INT_MAX,index;
    for(int i=0;i<6;i++){
        if(Tset[i]==false && distance[i]<=min){
            min=distance[i];
            index=i;
        }
    }
    return index;
}
void Dijkstra(int graph[6][6],int source){
    int distance[6];                            
    bool Tset[6];
    for(int i = 0; i<6; i++){
        distance[i] = INT_MAX;
        Tset[i] = false;    
    }
    distance[source] = 0;            
    for(int i = 0; i<6; i++){
        int m=min_dist(distance, Tset); 
        Tset[m]=true;
        for(int j = 0; j<6; j++){
            if(!Tset[j] && graph[m][j] && distance[m]!=INT_MAX && distance[m]+graph[m][j]<distance[j])
                distance[j]=distance[m]+graph[m][j];
        }
    }
    cout<<endl;
    for(int i = 0; i<6; i++){ 
        char letter=65+i; 
        cout<<"  "<<letter<<"  "<<distance[i]<<endl;
    }
}
int main()
{
    int graph[6][6]={
        {0, 1, 2, 0, 0, 0},
        {1, 0, 0, 5, 1, 0},
        {2, 0, 0, 2, 3, 0},
        {0, 5, 2, 0, 2, 2},
        {0, 1, 3, 2, 0, 1},
        {0, 0, 0, 2, 1, 0}};
    Dijkstra(graph,0);
    return 0; 
