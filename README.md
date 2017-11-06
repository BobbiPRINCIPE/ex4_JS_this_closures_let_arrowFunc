# ex4_JS_this_closures_let_arrowFunc
Example project showing JavaScript's
+ this
+ closures
+ let
+ Fat Arrow Functions (FAF); see fatArrowFunctions directory

Each one is explained in their respective directories under this project

# ilker git refresher
## ilker Setup the remote github repo
+ To push to remote github
```
git remote add origin https://github.com/fdu-csci3444/ex4_JS_this_closures_let_arrowFunc.git
git remote -v
git remote show origin
git push -u origin master
```
## ilker some git commands refresher
+ To see local branches
```
git branch
```
+ To see local and remote tracking branches
```
git branch -a
```
+ To see commits on a remote(this case called origin) branch (for example master)
```
git log
git log origin/master
```
+ To fetch/merge from remote
    - 1st fetch; git fetch puts changes from remote repo to your local repo, but does not modify your working tree (your local working files). Note "git fetch" fetches remote called origin. 
    ```
    git fetch <remote> <branch>
    git fetch
    git fetch origin
    git fetch anotherRemote
    ```
    - then merge; git merge to merge remote's fetched changes with local working copy of files. Hence merge creates a merge commit to your local repo.
    ```
    git merge
    git merge origin/master
    ```
+ To pull (pull = fetch + merge) from remote
```
git pull <remote>
git pull origin
```
+ git pull <remote> is equivalent to
```
git fetch <remote>
git merge orgin/<current-branch>
```
+ To pull --rebase (pull --rebase = fetch + rebase)
```
git pull --rebase <remote>
git pull --rebase origin
```
+ git pull --rebase <remote> is equivalent to
```
git fetch <remote>
git rebase <remote>
git fetch origin
git rebase origin
```

## to keep clone of a fork and fork in sync with original repo in github after original changes
if you had forked a repo, lets say this repo, then you can resync your local repo to original repo and then push that to your fork in github
+ login to github as you (in this example ilker-public2) and find the original github project (of ilker-kiris), in this example
```
"https://github.com/fdu-csci3444/ex4_JS_this_closures_let_arrowFunc.git"
```
+ then fork it in github site by clicking "fork" button on top right corner
+ copy the git url of your fork, in this example 
```
"https://github.com/fdu-csci3444-public/ex4_JS_this_closures_let_arrowFunc.git"
```
+ in gitbash cd to your project where you are going to clone your fork and then clone it 
```
cd /c/fdu/csci3444/projects
git clone https://github.com/fdu-csci3444-public/ex4_JS_this_closures_let_arrowFunc.git
```
+ see that above fork github repo shows up as "origin" in your remote repos
```
git remote -v
```
+ after some time, let's say original github repo got changed, and you want to sync your local clone of your fork, and your fork in github.
+ 1st add the original github repo url as a remote to your local repo, for example calling it "upstream". Then you should see "upstream" as well as "origin" in your remote repo list
```
git remote add upstream https://github.com/fdu-csci3444/ex4_JS_this_closures_let_arrowFunc.git
git remote -v
```
+ 2nd fetch the original repo to your local repo;
```
git fetch upstream
```
+ 3rd merge the above fetched repo to your local working view;
```
git merge upstream/master
```
+ 4th push your local repo to your github fork repo
```
git push -u origin master
```

